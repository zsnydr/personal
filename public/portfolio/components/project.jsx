import React from 'react';


const Project = ({ project }) => {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <p>{project.description}</p>
      <a href={project.link}>{project.link}</a>
      <br />
    </div>
  );
};

export default Project;
