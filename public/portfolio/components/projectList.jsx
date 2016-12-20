import React, { PropTypes } from 'react';

import Project from './project';


const ProjectList = ({ projects, setActiveProject }) => {
  const mapProjects = () => {
    return projects.map((project) => {
      return (
        <div key={project.id} onClick={() => { setActiveProject(project); }}>
          <Project project={project} setActiveProject={setActiveProject} />
        </div>
      );
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

ProjectList.propTypes = {
  projects: PropTypes.array,
  setActiveProject: PropTypes.func
};
