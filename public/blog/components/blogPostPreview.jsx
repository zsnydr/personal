import React, { PropTypes } from 'react';


const BlogPostPreview = ({ post, navToArticle }) => {
  return (
    <div onClick={() => { navToArticle(post); }}>
      <h1>{post.title}</h1>
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
