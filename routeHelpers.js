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
  }
};
