module.exports = {
  entry: './index.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  node: {
    fs: "empty"
  },
  debug: true,
  bail: true,
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      // jquery-ui loads some images
      { test: /\.(jpg|png|gif)$/, loader: "file" }
    ]
  }
}
