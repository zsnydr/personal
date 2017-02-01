const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

const CONNECTION_URI = process.env.MONGOLAB_URI || 'mongodb://localhost/personal';

mongoose.connect(CONNECTION_URI);

module.exports = mongoose.connection;
