import React from 'react';

import ScrollAnimator from './ScrollAnimator.jsx';

import styles from '../cssModules/projectPage.module.css';

const Project = ({ title, desc, gif, contributions, type }) => {
  return (
    <div className={styles.project}>
      <div id={styles[type]}>
        <ScrollAnimator src={type} gif={gif} phone={type === 'phone'}/>
      </div>
      <div id={styles[type + '-description']}>
        <h2>{title}</h2>
        <p>{desc}</p>
        <h4>My Contributions</h4>
        <div id={styles['contribution-list']}>
          {contributions.map((curContr) => {
            return (
              <div key={curContr} className={styles.contributions}>{curContr}</div>
            );
          })}
        </div>
      </div>
  </div>
  );
};

export default Project;
