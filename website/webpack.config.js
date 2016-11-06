var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
context: __dirname + "/",
  entry: {
  javascript: "./app.js",
  html: "./index.html"
},
resolve: {
    extensions: ['', '.js', '.jsx']
  },

  
output: {
    filename: "app.js",
    path: __dirname + "/dist"
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
      loaders: [
     {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
                    // activate source maps via loader query
                    'css?sourceMap!' + 'less?sourceMap'
                )
      }
    ]
  },
 plugins: [
        // extract inline css into separate 'styles.css'
        new ExtractTextPlugin('styles.css')
    ]
};