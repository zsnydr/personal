import React, { PropTypes } from 'react';


const BlogPostPreview = ({ post, navToArticle }) => {
  return (
    <div className="blog-post-preview">
      <h1 onClick={() => { navToArticle(post.pathTitle); }}>{post.title}</h1>
      <p>{post.summary}</p>
      <p>{post.postDate}</p>
    </div>
  );
};

export default BlogPostPreview;

BlogPostPreview.propTypes = {
  post: PropTypes.object,
  navToArticle: PropTypes.func
};
