import Vue from 'vue';
import Router from 'vue-router';

// Custom error catching to prevent console route duplication error messages
// at route replace (e.g. when switching out tags or groups in the url)
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

Vue.use(Router);

const router = new Router({
  base: process.env.NODE_ENV === 'production'
  ? '/wann/'
  : '/',
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // eslint-disable-next-line no-undef
    if (from && to.name === from.name && _.isEqual(to.params, from.params)) {
      return;
    }
    let position;
    if (savedPosition) {
      position = savedPosition;
    } else {
      position = { x: 0, y: 0 };
    }
    return position;
  },
  routes: [
    {
      path: '/',
      name: 'landingpage',
      component: () => import(/* webpackChunkName: "index" */ './views/Index.vue'),
      meta: {
        requiresAuth: false,
        title: 'Index',
      },
    },
    // {
    //   path: '*',
    //   name: 'notFound',
    //   component: () => import(/* webpackChunkName: "notFound" */ './views/NotFound.vue'),
    //   meta: {
    //     requiresAuth: false,
    //     title: 'Not Found',
    //   },
    // },
  ],
});

export default router;
