const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

const CONNECTION_URI = process.env.CONNECTION_URI || 'mongodb://localhost/personal';

mongoose.connect(CONNECTION_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

db.once('open', () => {
  console.log('MongoDB connection established');
});

module.exports = db;
