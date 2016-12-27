import React, { PropTypes } from 'react';


const ArticleBody = ({ post }) => {
  return (
    <div className="article-body">
      <p>{post.body}</p>
    </div>
  );
};

export default ArticleBody;

ArticleBody.propTypes = {
  post: PropTypes.object
};
