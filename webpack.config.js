var config = {
  entry:  __dirname + "/App.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015','react']
      }
    }]
  },
  devtool: "#inline-source-map",
  debug: true
};

module.exports = config;
