import React, { PropTypes } from 'react';

import BlogPostPreview from './blogPostPreview';


const BlogPostList = ({ posts, navToArticle }) => {
  const mapBlogPosts = () => {
    return posts.map((post) => {
      return <BlogPostPreview post={post} navToArticle={navToArticle} />;
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
  posts: PropTypes.array,
  navToArticle: PropTypes.func
};
