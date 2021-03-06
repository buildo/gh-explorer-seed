import webpack from 'webpack';
import CompressionPlugin from 'compression-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpackBase, { paths, indexHtml } from './webpack.base.babel';

export default {
  ...webpackBase,

  entry: paths.ENTRY,

  module: {
    ...webpackBase.module,
    loaders: webpackBase.module.loaders.concat([{
      test: /\.s?css$/,
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
    }])
  },

  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new CompressionPlugin({ regExp: /\.js$|\.css$/ }),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({ bundle: true, templateContent: indexHtml }),
    new ExtractTextPlugin('style', 'style.[hash].min.css')
  ]
};