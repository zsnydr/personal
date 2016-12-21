import request from 'superagent';
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import BlogPostList from './blogPostList';


class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

    this.navToArticle = this.navToArticle.bind(this);
  }

  componentDidMount() {
    request
      .get('/api/blogPosts')
      .end((err, results) => {
        if (err) console.log('Error getting blog posts: ', err);
        const sortedResults = results.body.sort((a, b) => { return b.postDate > a.postDate; });
        this.setState({ posts: sortedResults });
      });
  }

  navToArticle(post) {
    // set active article to post
    browserHistory.push('/article');
  }

  render() {
    if (!this.state.posts.length) {
      return (
        <div>Waiting for blog posts...</div>
      );
    }

    return (
      <div>
        <BlogPostList posts={this.state.posts} navToArticle={this.navToArticle} />
      </div>
    );
  }
}

export default Blog;
