import React, { PropTypes } from 'react';


const ActiveProject = ({ project }) => {
  return (
    <div className="portfolio-active-project">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <a href={project.link}>{project.link}</a>
    </div>
  );
};

export default ActiveProject;

ActiveProject.propTypes = {
  project: PropTypes.object
};
