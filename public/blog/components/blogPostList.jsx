import React, { PropTypes } from 'react';

import BlogPostPreview from './blogPostPreview';


const BlogPostList = ({ posts, navToArticle }) => {
  const mapBlogPosts = () => {
    return posts.map((post) => {
      return <BlogPostPreview key={post._id} post={post} navToArticle={navToArticle} />;
    });
  };

  return (
    <div className="blog-post-list">
      {mapBlogPosts()}
    </div>
  );
};

export default BlogPostList;

BlogPostList.propTypes = {
  posts: PropTypes.array,
  navToArticle: PropTypes.func
};
