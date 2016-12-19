const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();

// const router = express.Router();

const compiler = webpack(webpackConfig);

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, '/dist')));
// app.use('/assets', express.static(path.join(__dirname, '/assets')));

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath
}));

// app.use(webpackHot(compiler, {
//   log: console.log,
//   path: '/__webpack_hmr',
//   heartbeat: 1 * 1000
// }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use('/api', router);

// router(routes);

app.listen(app.get('port'));
console.log('Listening to port... ', app.get('port'));

module.exports = app;
