import request from 'superagent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

import updateBlogPosts from '../../actions/action_blogPosts';
import updateActivePost from '../../actions/action_activePost';

import BlogPostList from './blogPostList';


class Blog extends Component {
  constructor(props) {
    super(props);

    this.navToArticle = this.navToArticle.bind(this);
  }

  componentDidMount() {
    request
      .get('/api/blogPosts')
      .end((err, results) => {
        if (err) console.log('Error getting blog posts: ', err);
        const sortedResults = results.body.sort((a, b) => { return b.postDate > a.postDate; });
        this.props.updateBlogPosts(sortedResults);
      });
  }

  navToArticle(post) {
    const index = this.props.blogPosts.indexOf(post);
    console.log('INDEX ', index)
    this.props.updateActivePost(index);
    browserHistory.push('/article');
  }

  render() {
    if (!this.props.blogPosts.length) {
      return (
        <div>Waiting for blog posts...</div>
      );
    }

    return (
      <div>
        <BlogPostList posts={this.props.blogPosts} navToArticle={this.navToArticle} />
      </div>
    );
  }
}


function mapStateToProps({ blogPosts, activePost }) {
  return {
    blogPosts,
    activePost
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateBlogPosts, updateActivePost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);

Blog.propTypes = {
  updateBlogPosts: PropTypes.func,
  updateActivePost: PropTypes.func,
  blogPosts: PropTypes.array
};
