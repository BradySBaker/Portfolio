import React from 'react';
import Project from './smallWidgets/Project.jsx';

import styles from './cssModules/projectPage.module.css';

import projectInfo from './projectInfo.js';

const ProjectPage = () => {
  return (
    <div id={styles.widget}>
      <h1 className='page-header' id='projects'>Projects</h1>
      <div className='underline'/>
      <h5>Below are some of my finished projects</h5>
      <Project title={'ToyShare'} link={'https://github.com/Team-4-BOC/ToyShare'} desc={projectInfo.toyshare.desc} libraries={projectInfo.toyshare.libraries} gif={'./images/projects/toyshare.gif'} contributions={projectInfo.toyshare.contributions} type={'phone'}/>
      <Project title={'Grace Outfitters'} title2={'Backend'} link={'https://github.com/site-of-grace/FEC'} desc={projectInfo.fec.desc} libraries={projectInfo.fec.libraries} gif={'./images/projects/fec.gif'} contributions={projectInfo.fec.contributions} type={'laptop'} link2={'https://github.com/rpp2210-sdc-freesia/product-overview'}/>
      <div id={styles.ps}>This is just a video of the app click the video link below to see the device/app working in conjunction</div>
      <Project title={'LED Canvas'} title2={'Arduino'} title3={'Video Of Device'} gif={'./images/projects/ledcanvas.gif'} desc={projectInfo.ledCanvas.desc} contributions={projectInfo.ledCanvas.contributions} libraries={projectInfo.ledCanvas.libraries} link={'https://github.com/BradySBaker/LED-Canvas-Frontend'} link2={'https://github.com/BradySBaker/LED-Canvas-Arduino'} link3={'https://www.youtube.com/watch?v=rL2p1DnfBfw'} type={'phone'}/>
  </div>
  );
};

export default ProjectPage;
