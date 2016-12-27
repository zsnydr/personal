import React, { PropTypes } from 'react';

import Project from './project';


const ProjectList = ({ projects, setActiveProject }) => {
  const mapProjects = () => {
    return projects.map((project) => {
      return <Project key={project.id} project={project} setActiveProject={setActiveProject} />;
    })
    .sort((a, b) => { return a.id > b.id; });
  };

  return (
    <div className="project-list">
      {mapProjects()}
    </div>
  );
};

export default ProjectList;

ProjectList.propTypes = {
  projects: PropTypes.array,
  setActiveProject: PropTypes.func
};
