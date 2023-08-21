import React from 'react';

import ScrollAnimator from './ScrollAnimator.jsx';

import styles from '../cssModules/projectPage.module.css';

const linkClick = (link) => {
  window.location = link;
};

const Project = ({ title, desc, gif, contributions, type, link, title2, link2 }) => {
  return (
    <div className={styles.project}>
      <div id={styles[type]}>
        <ScrollAnimator src={type} gif={gif} phone={type === 'phone'}/>
      </div>
      <div id={styles[type + '-description']}>
        <h2 href={link} onClick={() => linkClick(link)}>{title}</h2>
        <p>{desc}</p>
        {title2 ? <h2 style={{ fontSize: '2vw' }} onClick={() => linkClick(link2)}>{title2}</h2> : null}
        <h4>My Contributions</h4>
        <div id={styles['contribution-list']}>
          {contributions.map((curContr) => {
            if (curContr.text) {
              return (
                <div key={curContr.text} className={styles.contributions} style={curContr.style}>{curContr.text}</div>
              );
            }
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
