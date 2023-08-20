import React from 'react';

import ScrollAnimator from './smallWidgets/ScrollAnimator.jsx';

import styles from './cssModules/projectPage.module.css';

const toyShareContributions = ['Map Feature', 'Individual Toy Page', 'Toy Distance', 'Toy Locations', 'All Toy Backend Routes'];
const fecContributions = ['Review List', 'Lazy Loading', 'Sort Reviews', 'Filter Reviews', 'Post Image Review', 'Review API fetch'];

const ProjectPage = () => {
  return (
    <div id={styles.widget}>
      <h1>Projects</h1>
      <div id={styles.underline}/>
      <h3>Below are some of my finished projects</h3>
      <div className={styles.project}>
        <div id={styles.phone}>
          <ScrollAnimator src={'phone'} width={'28vw'} gif={'./images/projects/toyshare.gif'} phone={true}/>
        </div>
        <div id={styles['phone-description']}>
          <h2>Toy Share</h2>
          <p>
          ToyShare is a comprehensive application developed by a collaborative team, enabling users to effortlessly lend their toys to others or borrow playthings from fellow users.
          </p>
          <h4>My Contributions</h4>
          <div id={styles['contribution-list']}>
            {toyShareContributions.map((curContr) => {
              return (
                <div key={curContr} className={styles.contributions}>{curContr}</div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div id={styles.laptop}>
        <ScrollAnimator src={'laptop'} width={'65vw'} gif={'./images/projects/fec.gif'}/>
        </div>
        <div id={styles['laptop-description']}>
          <h2>Grace Outfitters</h2>
          <p>
            Grace Outfitters is a web app displaying relevant information for a single product in the catalog of an online retailer. It is composed of omposed of Product Overview, Ratings & Reviews, Questions & Answers, and Related Items & Outfit Creation
          </p>
          <h4>My Contributions</h4>
          <div id={styles['contribution-list']}>
            {fecContributions.map((curContr) => {
              return (
                <div key={curContr} className={styles.contributions}>{curContr}</div>
              );
            })}
          </div>

        </div>
        <h2></h2>
      </div>
  </div>
  );
};

export default ProjectPage;
