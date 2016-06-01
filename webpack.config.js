var path = require('path');
var webpack = require('webpack');

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
				test: /.\jsx?$/,
				include: [
					path.resolve(__dirname, 'src'),
					path.resolve(__dirname, 'test')
				],
				loader: 'babel'
			}
		]
	},
	
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
	

};