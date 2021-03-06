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

    this.setActiveProject = this.setActiveProject.bind(this);
  }

  componentDidMount() {
    request
      .get('/api/projects')
      .end((err, results) => {
        if (err) console.log('Error getting projects: ', err);
        this.setState({ projects: results.body, activeProject: results.body[0] });
      });
  }

  setActiveProject(project) {
    this.setState({ activeProject: project });
  }

  render() {
    if (!this.state.projects.length) {
      return <div className="portfolio" />;
    }

    return (
      <div className="portfolio">
        <div className="portfolio-content">
          <ProjectList projects={this.state.projects} setActiveProject={this.setActiveProject} />
          <ActiveProject project={this.state.activeProject} />
        </div>
      </div>
    );
  }
}

export default Portfolio;
