import request from 'superagent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react';

import ArticleHeader from '../components/articleHeader';
import ArticleBody from '../components/articleBody';

import updateActivePost from '../../actions/action_activePost';


class Article extends Component {

  componentDidMount() {
    request
    .get('/api/activePost')
    .query({ pathTitle: this.props.location.pathname.substring(6) })
    .end((err, results) => {
      if (err) console.log('Error getting blog posts: ', err);
      this.props.updateActivePost(results.body);
    });
  }

  render() {
    if (!this.props.activePost || this.props.activePost.pathTitle !== this.props.location.pathname.substring(6)) {
      return <div className="article" />;
    }

    return (
      <div className="article">
        <div className="article-content">
          <ArticleHeader post={this.props.activePost} />
          <ArticleBody post={this.props.activePost} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ activePost }) {
  return {
    activePost
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateActivePost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);

Article.propTypes = {
  updateActivePost: PropTypes.func,
  activePost: PropTypes.object,
  location: PropTypes.object
};
