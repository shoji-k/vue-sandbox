const path = require("path");

module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
      },
    },
  },
};
