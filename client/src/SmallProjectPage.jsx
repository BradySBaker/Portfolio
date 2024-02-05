import React, { useState } from 'react';

import styles from './cssModules/projectPage.module.css';

const projects = [
  {title: 'Python Game', desc: 'A very simple python game using the Pygame library to help me learn python in a fun and exciting way!', link: 'https://github.com/BradySBaker/Simple-Python-Game'},
  {title: 'Phaser.js Game', desc: 'My first Phaser.js game[unfinished] includes a player arm that follows the mouse smoothly and bends. It features randomly generated pitfalls, gun recoil, and simple enemies for an engaging experience. This summarizes the core elements of my ongoing Phaser.js project.', link: 'https://github.com/BradySBaker/Cosmic-Misery-2d-Platformer-?tab=readme-ov-file'},
  {title: 'Presentation creator', desc: 'Allows users to easily create, delete, move, and edit slides using a dynamic editor. Its standout feature is the real-time preview and the ability to enhance presentations with moving sprites for quick and captivating animations.', link: 'https://github.com/BradySBaker/GameEnginePresentation'},
  {title: 'Book roulette', desc: 'A app that displays random books allowing the user to add them to there library. Each book displays its information and link to purchase.', link: 'https://github.com/BradySBaker/mvp'},
  {title: 'Many More', desc: 'I have many more solo and team projects view them in my github repo!'}
];

const SmallProjectPage = () => {
  const [hideList, setHideList] = useState(true);

  const linkClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div id={styles.widget} className={styles.SmallProjectPage}>
      <h1 id={styles.smallProjectButton}>----<h2 onClick={() => setHideList((hideList) => !hideList)}>🠻{hideList ? 'View' : 'Hide'} Smaller Projects🠻</h2>----</h1>
      {!hideList ?
      <div id={styles.projectList}>
        {projects.map((project) => {
          return (
            <div className={styles.smallProject}>
              <h3 onClick={() => {if(project.link) {linkClick(project.link)}}}>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          )
        })}
      </div>

    : null}
    </div>
  )
};

export default SmallProjectPage;