const Project = require('../mongo/models').Project;
const BlogPost = require('../mongo/models').BlogPost;


module.exports = {
  getProjects: () => {
    return Project.find();
  },

  getBlogPosts: () => {
    return BlogPost.find();
  }
};
