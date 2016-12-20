import React from 'react';

import Project from './project';


const ProjectList = (props) => {
  const mapProjects = () => {
    return props.projects.map((project) => {
      return <div><Project project={project} /></div>;
    })
    .sort((a, b) => { return a.id > b.id; });
  };

  if (!this.state.projects.length) {
    return (
      <div>Waiting for projects...</div>
    );
  }

  return (
    <div>
      {mapProjects()}
    </div>
  );
};

export default ProjectList;
