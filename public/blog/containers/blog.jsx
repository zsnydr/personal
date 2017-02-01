import request from 'superagent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

import updateBlogPosts from '../../actions/action_blogPosts';

import BlogPostList from '../components/blogPostList';


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

  navToArticle(pathTitle) {
    browserHistory.push(`/blog/${pathTitle}`);
  }

  render() {
    if (!this.props.blogPosts.length) {
      return <div className="blog" />;
    }

    return (
      <div className="blog">
        <div className="blog-content">
          <BlogPostList posts={this.props.blogPosts} navToArticle={this.navToArticle} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ blogPosts }) {
  return {
    blogPosts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateBlogPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);

Blog.propTypes = {
  updateBlogPosts: PropTypes.func,
  blogPosts: PropTypes.array
};
