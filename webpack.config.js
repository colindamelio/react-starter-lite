const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('[name].css');

module.exports = {
  entry: {
    app: './app', // reads app/index.js
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    chunkFilename: '[id].js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: extractCSS.extract({ fallback: 'style-loader', use: 'css-loader' }),
      },
      { test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['transform-runtime'],
        },
      },
    ],
  },
  plugins: [
    extractCSS,
  ],
};

// npm run dev
