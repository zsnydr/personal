import React from 'react';


const ArticleBody = ({ post }) => {
  return (
    <div>
      <p>{post.body}</p>
    </div>
  );
};

export default ArticleBody;
