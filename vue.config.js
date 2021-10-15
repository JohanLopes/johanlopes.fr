module.exports = {
  //publicPath: process.env.NODE_ENV === "production" ? "/johanlopes.fr/" : "/",

  chainWebpack: (config) => {
    // GraphQL Loader
    config.module
      .rule("yaml")
      .test(/\.ya?ml$/)
      .use("js-yaml-loader")
      .loader("js-yaml-loader")
      .end();
  },
};
