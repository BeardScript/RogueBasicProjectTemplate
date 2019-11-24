var path = require('path');
var glob = require("glob");
var webpack = require('webpack');

function resolve (dir) {
  return path.join(__dirname, dir)
}

const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  mode: "development",
  entry: { 
    assets: glob.sync( resolve('./Assets') + "/**/*.ts" ),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    library: "[name]",
    libraryTarget: "umd",
  },
  externals: {
    "rogue-engine": {
      commonjs: 'rogue-engine',
      commonjs2: 'rogue-engine',
      amd: 'rogue-engine',
      root: 'rogue-engine'
    },
    "rogue-editor": {
      commonjs: 'rogue-editor',
      commonjs2: 'rogue-editor',
      amd: 'rogue-editor',
      root: 'rogue-editor'
    },
    three: {
      commonjs: 'three',
      commonjs2: 'three',
      amd: 'three',
      root: 'three'
    },
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '*'],
    modules: [
      resolve('node_modules'),
      resolve("_Rogue")
    ],
    alias: {
      'Assets': resolve('Assets'),
      'rogue-engine': resolve("_Rogue/rogue-engine"),
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [ /node_modules/, /_Rogue\/test/, /Assets\/test/ ],
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('Assets'), resolve('test'), resolve('_Rogue')],
        exclude: [ /node_modules/, /src\/test/ ],
        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.libs\.js$/,
        use: [ 'script-loader' ]
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    overlay: true,
    disableHostCheck: true,
    clientLogLevel: 'warning'
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [ 
    new HardSourceWebpackPlugin()
  ]

}
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
var CompressionWebpackPlugin = require('compression-webpack-plugin');

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    // new UglifyJsPlugin({
    //   sourceMap: true,
    //   parallel: true,
    //   cache: true
    // }),

    // new CompressionWebpackPlugin({
    //   asset: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   test: /\.(js|ts|vue|json|png|babylon|obj|jpg|gif|svg|css)$/,
    //   threshold: 10240,
    //   minRatio: 0.8
    // }),

    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    
    new webpack.LoaderOptionsPlugin({
      minimize: false
    })

  ])
}

