const Project = require('./db/models').Project;


module.exports = {
  getProjects: () => {
    return Project.fetchAll();
  }
};
