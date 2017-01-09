const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');

const router = require('./server/router');
const db = require('./mongo/connection');


const app = express();
const expressRouter = express.Router();
const compiler = webpack(webpackConfig);

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, '/dist')));

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

app.use('/api', expressRouter);
router(expressRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

db.once('open', () => {
  console.log('MongoDB connection established');
  app.listen(app.get('port'));
  console.log('Listening to port... ', app.get('port'));
});


module.exports = app;
