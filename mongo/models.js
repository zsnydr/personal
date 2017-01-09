const mongoose = require('mongoose');


const ProjectSchema = new mongoose.Schema({
  title: String,
  summary: String,
  description: String,
  link: String
});

const BlogPostSchema = new mongoose.Schema({
  title: String,
  summary: String,
  body: String,
  postDate: Date
});

const Project = mongoose.model('Project', ProjectSchema);
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = {
  Project,
  BlogPost
};
