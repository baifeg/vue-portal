'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const testWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.test.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: HOST || config.qa.host,
    port: PORT || config.qa.port,
    open: config.qa.autoOpenBrowser,
    overlay: config.qa.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.qa.assetsPublicPath,
    proxy: config.qa.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.qa.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/qa.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      chunks: ['app', 'vendors', 'manifest'],
      inject: true
    }),
	new webpack.ProvidePlugin({
	     jQuery: "jquery",
	     $: "jquery", 
	     axios: "axios",
	 })
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.qa.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      testWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      testWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${testWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.qa.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(testWebpackConfig)
    }
  })
})
