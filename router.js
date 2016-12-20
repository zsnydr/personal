const routeHelpers = require('./routeHelpers');

module.exports = (app) => {
  app.get('/api/projects', routeHelpers.getProjects);
};
