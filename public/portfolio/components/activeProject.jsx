import React, { PropTypes } from 'react';


const ActiveProject = ({ project }) => {
  return (
    <div className="active-project">
      <h1>{project.title}</h1>
    </div>
  );
};

export default ActiveProject;

ActiveProject.propTypes = {
  project: PropTypes.object
};
