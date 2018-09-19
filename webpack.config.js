const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // See: https://github.com/babel/babel/issues/7254 (about babel polyfill)
  entry: ['@babel/polyfill', './web/themes/lytlyrik/js/index.js'],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'web/themes/lytlyrik/build')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'resolve-url-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  // Use the jquery library provided by Drupal.
  externals: {
    jquery: 'jQuery'
  }
};
