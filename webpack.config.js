const path = require('path');

module.exports = {
  entry: './app/assets/scripts/scripts.js',
  output: {
    path: path.resolve(__dirname, 'app/temp/scripts'),
    filename: 'bundled.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};