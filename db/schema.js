const config = require('./config');
const knex = require('knex')(config);
const bookshelf = require('bookshelf')(knex);


bookshelf.knex.schema.hasTable('blogPosts').then((exists) => {
  if (!exists) {
    bookshelf.knex.schema.createTable('blogPosts', (post) => {
      post.increments('id').primary();
      post.text('title');
      post.text('summary');
      post.text('body');
      post.datetime('postDate');
      post.timestamps();
    }).then((table) => {
      console.log('Created Table', table);
    });
  }
});

bookshelf.knex.schema.hasTable('projects').then((exists) => {
  if (!exists) {
    bookshelf.knex.schema.createTable('projects', (project) => {
      project.increments('id').primary();
      project.text('title');
      project.text('summary');
      project.text('description');
      project.text('link');
      project.timestamps();
    }).then((table) => {
      console.log('Created Table', table);
    });
  }
});
