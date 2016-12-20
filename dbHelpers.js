const Project = require('./db/models').Project;
const BlogPost = require('./db/models').BlogPost;


module.exports = {
  getProjects: () => {
    return Project.fetchAll();
  },

  getBlogPosts: () => {
    return BlogPost.fetchAll();
  }
};
