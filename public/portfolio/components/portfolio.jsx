import request from 'superagent';
import React, { Component } from 'react';

import ProjectList from './projectList';
import ActiveProject from './activeProject';


class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      activeProject: null
    };
  }

  componentDidMount() {
    request
      .get('/api/projects')
      .end((err, results) => {
        if (err) console.log('Error getting projects: ', err);
        console.log('Results getting projects: ', results.body);
        this.setState({ projects: results.body, activeProject: results.body[0] });
      });
  }

  render() {
    if (!this.state.projects.length) {
      return <div>Waiting for projects...</div>;
    }

    return (
      <div>
        <ProjectList projects={this.state.projects} />
        <ActiveProject project={this.state.activeProject} />
      </div>
    );
  }
}

export default Portfolio;
