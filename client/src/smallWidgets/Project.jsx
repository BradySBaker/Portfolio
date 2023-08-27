import React, { useState } from 'react';

import ScrollAnimator from './ScrollAnimator.jsx';

import styles from '../cssModules/projectPage.module.css';

const linkClick = (link) => {
  window.open(link, '_blank');
};

const Project = ({ title, desc, gif, contributions, type, link, title2, link2, title3, link3, libraries }) => {
  const [displayLibraries, setDisplayLibraries] = useState(false);
  return (
    <div className={styles.project}>
      <div id={styles[type]}>
        <ScrollAnimator src={type} gif={gif} phone={type === 'phone'}/>
      </div>
      <div id={styles[type + '-description']}>
        <h2 href={link} onClick={() => linkClick(link)}>{title}</h2>
        <p>{desc}</p>
        <h4>My Contributions</h4>
        {!displayLibraries
          ? <div id={styles['contribution-list']}>
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
        <div className={styles.contributions} id={styles['library-contr-button']} onClick={() => setDisplayLibraries(true)}>View Libraries</div>
        </div>
          : null}
        {displayLibraries
          ? <div id={styles['contribution-list']}>
              {libraries.map((library) => {
                return (
                  <div className={styles.contributions} key={library}>{library}</div>
                );
              })}
               <div className={styles.contributions} id={styles['library-contr-button']} onClick={() => setDisplayLibraries(false)}>View Contributions</div>
            </div>
          : null}
        {title2 ? <h3 onClick={() => linkClick(link2)}>{title2}</h3> : null}
        {title3 ? <h3 onClick={() => linkClick(link3)}>{title3}</h3> : null}      </div>

  </div>
  );
};

export default Project;
