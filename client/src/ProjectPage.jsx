import React from 'react';
import Project from './smallWidgets/Project.jsx';

import styles from './cssModules/projectPage.module.css';

const toyShareContributions = ['Map Feature', 'Individual Toy Page', 'Toy Distance', 'Toy Locations', 'All Toy Backend Routes'];
const fecContributions = ['Review List', 'Lazy Loading', 'Sort Reviews', 'Filter Reviews', 'Post Image Review', 'Review API fetch', { text: 'Product MicroService', style: { backgroundColor: 'red' } }];
const toyShareDesc = 'ToyShare is a comprehensive application developed by a collaborative team, enabling users to effortlessly lend their toys to others or borrow playthings from fellow users.';
const fecDesc = '  Grace Outfitters is a web app displaying relevant information for a single product in the catalog of an online retailer. It is composed of omposed of Product Overview, Ratings & Reviews, Questions & Answers, and Related Items & Outfit Creation';

const ProjectPage = () => {
  return (
    <div id={styles.widget}>
      <h1>Projects</h1>
      <div id={styles.underline}/>
      <h3>Below are some of my finished projects</h3>
      <Project title={'ToyShare'} link={'https://github.com/Team-4-BOC/ToyShare'} desc={toyShareDesc} gif={'./images/projects/toyshare.gif'} contributions={toyShareContributions} type={'phone'}/>
      <Project title={'Grace Outfitters'} title2={'Backend'} link={'https://github.com/site-of-grace/FEC'} desc={fecDesc} gif={'./images/projects/fec.gif'} contributions={fecContributions} type={'laptop'} link2={'https://github.com/rpp2210-sdc-freesia/product-overview'}/>
  </div>
  );
};

export default ProjectPage;
