const webpack = require('webpack')
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin')
const webpackConfig = require('./webpack.config.base.js')

module.exports = function () {
  const myDevConfig = webpackConfig
  myDevConfig.devtool = 'inline-source-map'

  myDevConfig.plugins = myDevConfig.plugins.concat(
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
    new ForkTsCheckerNotifierWebpackPlugin({ title: 'Webpack build', excludeWarnings: true })
  )

  myDevConfig.devServer = {
    historyApiFallback: true,
    stats: 'errors-only',
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
    overlay: {
      errors: true,
      warnings: true
    }
  }
  return myDevConfig
}
