import React from 'react';

import ArticleHeader from './articleHeader';
import ArticleBody from './articleBody';


const Article = () => {
  return (
    <div>
      <ArticleHeader />
      <ArticleBody />
      <div>left and right arrows</div>
    </div>
  );
};

export default Article;
