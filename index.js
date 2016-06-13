var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var express = require('express');
var app = express();
var config;
if (process.env.NODE_ENV === 'production') {
	config = require('./webpack.config.prod.js');
} else {
	config = require('./webpack.config.dev.js');
}
var compiler = webpack(config);

process.env.PORT = process.env.PORT || 3000;

app.use(new webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath
}));

app.use(new webpackHotMiddleware(compiler));

app.get('*', function (req, res) {
	res.sendFile(path.resolve(__dirname, 'src/index.html'));
});

app.listen(process.env.PORT, function () {
	console.log('application started at ' + process.env.PORT);
});