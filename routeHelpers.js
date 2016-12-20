const dbHelpers = require('./dbHelpers');


module.exports = {
  getProjects: (req, res) => {
    dbHelpers.getProjects()
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
  },

  getBlogPosts: (req, res) => {
    dbHelpers.getBlogPosts()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
  }
};
