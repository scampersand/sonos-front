// The boilerplate base config returns a function that accepts a set of options,
// so to build an actual config we supply some options. We'll use the storybook
// entry and output, so those don't matter.
let boilerConfig = require('../webpack/webpack.base.babel')({
  entry: null,
  output: {},
  plugins: [],
  // Inline CSS from the dev config. Seems like this should be fine for
  // storybook; no need to add extra files.
  cssLoaders: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',
})

// Export a function for full control:
//   https://getstorybook.io/docs/configurations/custom-webpack-config
// configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
// where 'PRODUCTION' is used when building the static version of storybook.
module.exports = function(storybookBaseConfig, configType) {
  let storybookBabelLoader = storybookBaseConfig.module.loaders[0]
  let myBabelLoader = Object.assign(storybookBabelLoader, {
    query: Object.assign(storybookBabelLoader.query, {
      plugins: storybookBabelLoader.query.plugins.concat([
        ["resolver", {"resolveDirs": ["app"]}],
      ]),
    }),
  })
  let loaders = [myBabelLoader].concat(
    boilerConfig.module.loaders.slice(1)
  )
  return Object.assign(storybookBaseConfig, {
    module: {
      loaders,
    },
    postcss: boilerConfig.postcss,
    resolve: boilerConfig.resolve,
    devtool: boilerConfig.devtool,
  })
};
