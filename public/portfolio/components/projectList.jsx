import React from 'react';

import Project from './project';


const ProjectList = (props) => {
  const mapProjects = () => {
    return props.projects.map((project) => {
      return <div key={project.id}><Project project={project} /></div>;
    })
    .sort((a, b) => { return a.id > b.id; });
  };

  return (
    <div>
      {mapProjects()}
    </div>
  );
};

export default ProjectList;
