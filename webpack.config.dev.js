var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

exports = module.exports = {
	entry: {
		app: [
			'webpack-hot-middleware/client?reload=true',
			'./src/main.js'
		]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/'
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: [
					path.resolve(__dirname, 'src'),
					path.resolve(__dirname, 'test')
				],
				loader: 'babel'
			},
			{
				test: /\.css$/,
				include: [
					path.resolve(__dirname, 'src/css')
				],
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin("style.css")
	]


};