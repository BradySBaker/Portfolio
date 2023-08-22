import React from 'react';
import Project from './smallWidgets/Project.jsx';

import styles from './cssModules/projectPage.module.css';

const toyShareContributions = ['Map Feature', 'Individual Toy Page', 'Toy Distance', 'Toy Locations', 'All Toy Backend Routes'];
const fecContributions = ['Review List', 'Lazy Loading', 'Sort Reviews', 'Filter Reviews', 'Post Image Review', 'Review API fetch', { text: 'Product MicroService', style: { backgroundColor: 'red' } }];
const toyShareDesc = 'ToyShare is a comprehensive application developed by a collaborative team, enabling users to effortlessly lend their toys to others or borrow playthings from fellow users.';
const fecDesc = '  Grace Outfitters is a web app displaying relevant information for a single product in the catalog of an online retailer. It is composed of of Product Overview, Ratings & Reviews, Questions & Answers, and Related Items. The API is also composed of the main 3 microservices';
const ledCanvasContributions = [{ text: 'Solo Project', style: { backgroundColor: 'red' } }];
const ledCanvasDesc = 'LED Canvas is an interactive pixel art device controlled via Bluetooth. There is a mobile-first web app to control the device, although it works on desktop. The device itself consists of an Arduino controller, microphone, Bluetooth module, 16x16 LED grid, and a custom 3D-printed casing.';

const ProjectPage = () => {
  return (
    <div id={styles.widget}>
      <h1 className='page-header' id='projects'>Projects</h1>
      <div className='underline'/>
      <h5>Below are some of my finished projects</h5>
      <Project title={'ToyShare'} link={'https://github.com/Team-4-BOC/ToyShare'} desc={toyShareDesc} gif={'./images/projects/toyshare.gif'} contributions={toyShareContributions} type={'phone'}/>
      <Project title={'Grace Outfitters'} title2={'Backend'} link={'https://github.com/site-of-grace/FEC'} desc={fecDesc} gif={'./images/projects/fec.gif'} contributions={fecContributions} type={'laptop'} link2={'https://github.com/rpp2210-sdc-freesia/product-overview'}/>
      <Project title={'LED Canvas'} title2={'Arduino'} title3={'Video Of Device'} gif={'./images/projects/ledcanvas.gif'} desc={ledCanvasDesc} contributions={ledCanvasContributions} link={'https://github.com/BradySBaker/LED-Canvas-Frontend'} link2={'https://github.com/BradySBaker/LED-Canvas-Arduino'} link3={'https://www.youtube.com/watch?v=rL2p1DnfBfw'} type={'phone'}/>
  </div>
  );
};

export default ProjectPage;
