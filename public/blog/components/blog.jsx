import request from 'superagent';
import React, { Component } from 'react';

import BlogPostList from './blogPostList';


class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
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

  render() {
    if (!this.state.posts.length) {
      return (
        <div>Waiting for blog posts...</div>
      );
    }

    return (
      <div>
        <BlogPostList posts={this.state.posts} />
      </div>
    );
  }
}

export default Blog;
