const dbConfig = require('./dbConfig');
const knex = require('knex')(dbConfig);
const bookshelf = require('bookshelf')(knex);


const Link = bookshelf.Model.extend({
  tableName: 'urls'
});

const Links = new bookshelf.Collection({
  // model: Link ????
});

Links.model = Link;

Links.create({
  url: 'test'
}).then((link) => {
  console.log('Created link: ', link);
});
