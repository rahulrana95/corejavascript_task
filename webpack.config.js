var webpack = require('webpack');
var path = require('path');
var config = {
  context: __dirname + '/',
  mode: 'development', // `__dirname` is root of project and `src` is source
  entry: [
    './index.html'
  ],
  devServer: {
    open: false, // to open the local server in browser
    contentBase: __dirname + '/',
  },
  output: {
    path: path.join(__dirname, '/'), // `dist` is the destination
    publicPath: "/",
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [{
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.css$/,
        use: {
          loader: 'css-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'babel-loader?presets[]=es2015,presets[]=es2016,presets[]=stage-3,plugins[]=transform-class-properties'],
      }
    ]
  },
  resolve: {
    extensions: ['.html', '.js']
  },
};

module.exports = config;
