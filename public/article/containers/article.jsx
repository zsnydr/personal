import request from 'superagent';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react';

import ArticleHeader from '../components/articleHeader';
import ArticleBody from '../components/articleBody';

import updateBlogPosts from '../../actions/action_blogPosts';


class Article extends Component {
  constructor(props) {
    super(props);

    this.prevArticle = this.prevArticle.bind(this);
    this.nextArticle = this.nextArticle.bind(this);
  }

  componentDidMount() {
    if (!this.props.blogPosts.length) {
      request
      .get('/api/blogPosts')
      .end((err, results) => {
        if (err) console.log('Error getting blog posts: ', err);
        const sortedResults = results.body.sort((a, b) => { return b.postDate > a.postDate; });
        this.props.updateBlogPosts(sortedResults);
      });
    }
  }

  prevArticle() {
    // this.props.updateActivePost(this.props.activePost - 1);
    browserHistory.push(`/article?id=${Number(this.props.location.query.id) - 1}`);
  }

  nextArticle() {
    // this.props.updateActivePost(this.props.activePost + 1);
    browserHistory.push(`/article?id=${Number(this.props.location.query.id) + 1}`);
  }

  render() {
    if (this.props.location.query.id === undefined || !this.props.blogPosts.length) {
      return (
        <div>No active blog post</div>
      );
    }

    return (
      <div>
        <ArticleHeader post={this.props.blogPosts[this.props.location.query.id]} />
        <ArticleBody post={this.props.blogPosts[this.props.location.query.id]} />
        <button onClick={this.prevArticle}>previous</button>
        <button onClick={this.nextArticle}>next</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Article);

Article.propTypes = {
  updateBlogPosts: PropTypes.func,
  blogPosts: PropTypes.array,
  location: PropTypes.object
};
