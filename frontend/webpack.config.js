module.exports = {
  entry: './index.jsx',

  output: {
    path: '../app/assets/javascripts',
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      quert: { presets: ['es2015', 'react'] }
    }]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};