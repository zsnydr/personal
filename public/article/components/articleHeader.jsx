import React, { PropTypes } from 'react';


const ArticleHeader = ({ post }) => {
  return (
    <div className="article-header">
      <h1>{post.title}</h1>
    </div>
  );
};

export default ArticleHeader;

ArticleHeader.propTypes = {
  post: PropTypes.object
};
