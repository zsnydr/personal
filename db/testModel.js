const dbConfig = require('./dbConfig');
const knex = require('knex')(dbConfig);
const bookshelf = require('bookshelf')(knex);


const Project = bookshelf.Model.extend({
  tableName: 'projects',
  hasTimestamps: true
});

Project.forge({
  title: 'Laughter proposal laughing',
  summary: 'He an thing rapid these after going drawn or.',
  description: 'Affronting imprudence do he he everything. Sex lasted dinner wanted indeed wished out law. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an.',
  link: 'https://www.google.com'
})
.save()
.then((project) => {
  console.log('Created project: ', project.id);
})
.catch((err) => {
  console.log('Error creating project: ', err);
});

Project.forge({
  title: 'Instrument cultivated',
  summary: 'Expenses as material breeding insisted building to in.',
  description: 'New the her nor case that lady paid read. Invitation friendship travelling eat everything the out two. Shy you who scarcely expenses debating hastened resolved. Always polite moment on is warmth spirit it to hearts. Downs those still witty an balls so chief so.',
  link: 'https://www.google.com'
})
.save()
.then((project) => {
  console.log('Created project: ', project.id);
})
.catch((err) => {
  console.log('Error creating project: ', err);
});

Project.forge({
  title: 'Marianne',
  summary: 'John draw real poor on call my from.',
  description: 'Too cultivated use solicitude frequently. Dashwood likewise up consider continue entrance ladyship oh. Wrong guest given purse power is no. Friendship to connection an am considered difficulty. Country met pursuit lasting moments why calling certain the.',
  link: 'https://www.google.com'
})
.save()
.then((project) => {
  console.log('Created project: ', project.id);
})
.catch((err) => {
  console.log('Error creating project: ', err);
});

Project.forge({
  title: 'Respect forming',
  summary: 'Its had resolving otherwise she contented therefore.',
  description: 'Wrote water woman of heart it total other. By in entirely securing suitable graceful at families improved. Zealously few furniture repulsive was agreeable consisted difficult. Collected breakfast estimable questions in to favourite it.',
  link: 'https://www.google.com'
})
.save()
.then((project) => {
  console.log('Created project: ', project.id);
})
.catch((err) => {
  console.log('Error creating project: ', err);
});

// const Projects = bookshelf.Collection.extend({
//   model: Project
// });

// Projects.model = Project;

// new Projects()
//   .create({
//     title: 'test',
//     summary: 'test',
//     description: 'test',
//     link: 'test'
//   })
//   .then((project) => {
//     console.log('Created project: ', project);
//   });
