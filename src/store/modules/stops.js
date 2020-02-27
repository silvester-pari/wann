const state = {
  stops: [],
}

const getters = {

}

const mutations = {
  SET_STOPS(state, stops) {
    state.stops = stops
  },
}

const actions = {
  async fetchFavorites({ commit, rootState }) {
    const favoritesQuery = rootState.favorites.favorites.map(f => `rbl=${f}`).join('&')
    const response = await this.$axios.get(`/monitor?${favoritesQuery}`)
    commit('SET_STOPS', response.data.data.monitors)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}