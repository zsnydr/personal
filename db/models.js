const config = require('./config');
const knex = require('knex')(config);
const bookshelf = require('bookshelf')(knex);


const Project = bookshelf.Model.extend({
  tableName: 'projects',
  hasTimestamps: true
});

const BlogPost = bookshelf.Model.extend({
  tableName: 'blogPosts',
  hasTimestamps: true
});

module.exports = {
  Project,
  BlogPost
};
