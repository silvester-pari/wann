module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/wann/"
      : "/",
  "transpileDependencies": [
    "vuetify"
  ]
}