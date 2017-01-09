import React, { PropTypes } from 'react';

import Project from './project';


const ProjectList = ({ projects, setActiveProject }) => {
  const mapProjects = () => {
    return projects.map((project) => {
      return <Project key={project._id} project={project} setActiveProject={setActiveProject} />;
    })
    .sort((a, b) => { return a._id > b._id; });
  };

  return (
    <div className="portfolio-project-list">
      {mapProjects()}
    </div>
  );
};

export default ProjectList;

ProjectList.propTypes = {
  projects: PropTypes.array,
  setActiveProject: PropTypes.func
};
