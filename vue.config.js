module.exports = {
  //publicPath: process.env.NODE_ENV === "production" ? "/johanlopes.fr/" : "/",

  chainWebpack: (config) => {
    // Load customers and projects data from YAML
    config.module
      .rule("yaml")
      .test(/\.ya?ml$/)
      .use("js-yaml-loader")
      .loader("js-yaml-loader")
      .end();
  },
};
