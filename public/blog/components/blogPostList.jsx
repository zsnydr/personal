import React, { PropTypes } from 'react';

import BlogPostPreview from './blogPostPreview';


const BlogPostList = ({ posts }) => {
  const mapBlogPosts = () => {
    return posts.map((post) => {
      return <div key={post.id}><BlogPostPreview post={post} /></div>;
    });
  };

  return (
    <div>
      {mapBlogPosts()}
    </div>
  );
};

export default BlogPostList;

BlogPostList.propTypes = {
  posts: PropTypes.array
};
