const routeHelpers = require('./routeHelpers');


module.exports = (app) => {
  app.get('/projects', routeHelpers.getProjects);

  app.get('/blogPosts', routeHelpers.getBlogPosts);

  app.get('/activePost', routeHelpers.getActivePost);
};
