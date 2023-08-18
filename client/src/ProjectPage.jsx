import React from 'react';

import Laptop from './smallWidgets/Laptop.jsx';

import styles from './cssModules/projectPage.module.css';

const ProjectPage = () => {
  return (
    <div id={styles.widget}>
    <h1>Projects</h1>
    <div id={styles.underline}/>
    <Laptop />
  </div>
  );
};

export default ProjectPage;
