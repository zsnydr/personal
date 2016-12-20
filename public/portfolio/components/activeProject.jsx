import React, { PropTypes } from 'react';


const ActiveProject = ({ project }) => {
  return (
    <h1>{project.title}</h1>
  );
};

export default ActiveProject;

ActiveProject.propTypes = {
  project: PropTypes.object
};
