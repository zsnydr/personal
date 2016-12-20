const routeHelpers = require('./routeHelpers');

module.exports = (app) => {
  app.get('/projects', routeHelpers.getProjects);
};
