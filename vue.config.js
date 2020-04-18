module.exports = {
  publicPath: process.env.VUE_APP_HOST,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~bootstrap/scss/_functions.scss";
          @import "~bootstrap/scss/_variables.scss";
          @import "src/global/scss/custom-variables.scss";
        `,
      },
    },
  },
};
