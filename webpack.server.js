const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

module.exports = {
  target: 'node',
  mode: 'production',
  entry: './src/server/ssr-server.js',
  output: {
    filename: 'ssr-bundle.js',
    path: path.resolve(__dirname, 'build-server'),
    publicPath: '/'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"]
        },
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', [ '@babel/preset-react', { 'runtime': 'automatic' } ]],
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: parseInt(process.env.IMAGE_INLINE_SIZE_LIMIT || '10000'),
          name: '[name].[hash:20].[ext]',
          outputPath: '../build/static/media',
          publicPath: '/static/media'
        }
      },
      {
        test: /\.(svg)$/,
        loader: 'url-loader',
        options: {
          limit: parseInt(process.env.IMAGE_INLINE_SIZE_LIMIT || '10000'),
          name: '[name].[hash].[ext]',
          outputPath: '../build/static/media',
          publicPath: '/static/media'
        }
      }
    ]
  },
  plugins: []
}