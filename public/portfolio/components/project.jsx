import React, { PropTypes } from 'react';


const Project = ({ project, setActiveProject }) => {
  return (
    <div className="portfolio-project" onClick={() => { setActiveProject(project); }}>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <br />
    </div>
  );
};

export default Project;

Project.propTypes = {
  setActiveProject: PropTypes.func,
  project: PropTypes.object
};
