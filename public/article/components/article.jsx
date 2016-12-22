import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react';

import ArticleHeader from './articleHeader';
import ArticleBody from './articleBody';

import updateActivePost from '../../actions/action_activePost';


class Article extends Component {
  constructor(props) {
    super(props);

    this.prevArticle = this.prevArticle.bind(this);
    this.nextArticle = this.nextArticle.bind(this);
  }

  prevArticle() {
    this.props.updateActivePost(this.props.activePost - 1);
  }

  nextArticle() {
    this.props.updateActivePost(this.props.activePost + 1);
  }

  render() {
    if (this.props.activePost === undefined) {
      return (
        <div>No active blog post</div>
      );
    }

    return (
      <div>
        <ArticleHeader post={this.props.blogPosts[this.props.activePost]} />
        <ArticleBody post={this.props.blogPosts[this.props.activePost]} />
        <div onClick={this.prevArticle}>previous</div>
        <div onClick={this.nextArticle}>next</div>
      </div>
    );
  }
}

function mapStateToProps({ blogPosts, activePost }) {
  return {
    activePost,
    blogPosts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateActivePost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);

Article.propTypes = {
  updateActivePost: PropTypes.func,
  activePost: PropTypes.number,
  blogPosts: PropTypes.array
};
