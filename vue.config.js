module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/prototype-b'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/scss/style.scss";`,
      },
    },
  },
};