import React from 'react';

import ProfileIcon from './smallWidgets/ProfileIcon.jsx';

import styles from './cssModules/homePage.module.css';

const HomePage = () => {
  return (
    <div id={styles.home}>
      <div id={styles.mainContainer}>
        <div>
          <ProfileIcon />
        </div>
        <div id={styles.mainHeaders}>
          <h1>Brady Baker</h1>
          <h2>Software Developer</h2>
        </div>
      </div>
      <h3>&quot;Embracing Challenges, Overcoming Roadblocks, Engineering Solutions&quot;</h3>
      <img src='./images/arrow-icon.gif' id={styles.arrow}/>
    </div>
  );
};

export default HomePage;
