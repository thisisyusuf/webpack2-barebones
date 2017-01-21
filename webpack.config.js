var path =  require ('path');
var rupture = require('rupture');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
  	rules: [
  		{
  			test: /\.css$/,
  			use: [
  				'style-loader',
  				'css-loader?modules&importLoaders=1',
  				'postcss-loader'
  			]
  		},
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1',
          'postcss-loader',
          {
            loader: 'stylus-loader',
            options: {
              use: rupture(),
            },
        },
        ]
      },
  	]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'landing.html',
      template: 'landing.html',
      inject: 'body',
    })
  ]
  /*,
  stylus: {
    use: [rupture()]
  }
  plugins: [
  	require('autoprefixer')
  ]*/
}