const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');

const router = require('./server/router');
const db = require('./mongo/connection');


const app = express();
const expressRouter = express.Router();
const compiler = webpack(webpackConfig);

app.use(express.static(path.join(__dirname, '/dist')));

// only use dev middleware if working in development
if (process.env.NODE_ENV !== 'production') {
  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', expressRouter);
router(expressRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.set('port', process.env.PORT || 3000);

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

db.once('open', () => {
  console.log('MongoDB connection established');
  app.listen(app.get('port'));
  console.log('Listening to port... ', app.get('port'));
});


module.exports = app;
