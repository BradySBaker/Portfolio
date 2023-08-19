import React from 'react';

import ScrollAnimator from './smallWidgets/ScrollAnimator.jsx';

import styles from './cssModules/projectPage.module.css';

const laptopPositionMap = { 780: 1, 685: 3, 575: 5, 485: 7, 380: 9, 280: 11 };
const phonePositionMap = { 780: 1, 685: 4, 575: 6, 485: 8, 380: 10, 280: 13 };

const ProjectPage = () => {
  return (
    <div id={styles.widget}>
      <h1>Projects</h1>
      <div id={styles.underline}/>
      <h3>Below, are some of my finished projects</h3>
      <div id={styles.laptop}>
      <ScrollAnimator src={'laptop'} positionMap={laptopPositionMap} width={'55vw'}/>
      </div>
      <div id={styles.phone} style={{ transform: 'translateY(-20vw);' }}>
        <ScrollAnimator src={'phone'} positionMap={phonePositionMap} width={'28vw'}/>
      </div>
  </div>
  );
};

export default ProjectPage;
