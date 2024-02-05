import React, { useState } from 'react';

import styles from './cssModules/aboutContact.module.css';

import skillInfo from './skillInfo';

const skills = ['JavaScript', 'HTML', 'CSS', 'TypeScript',  'React.js', 'Git', 'Node.js', 'Docker', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redux', 'EC2/S3', 'Babel.js', 'Jest', 'NginX', 'Python', 'Socket.IO', 'Collaboration', 'Many More'];

const About = () => {
  const [infoDisplay, setInfoDisplay] = useState(false);

  return (
    <div id={styles.About} className={styles.widgets}>
      <h1 className='page-header' id='about'>About Me</h1>
      <div className='underline' />
      <div id={styles['about-me-container']}>
        <div>
          <h2>Get to know me</h2>
          <div>
            <p>
              I&apos;m a <strong>fullstack web developer</strong> and passionate problem-solver. I enjoy all aspects of programming
              from <strong>backend</strong> functionality and <strong>front-end</strong> development to <strong>databases</strong> and
              coding challenges. Overcoming technical roadblocks is my forte, and
              I thrive in the ever-changing software engineering environment.
            </p>
            <p>
              Beginning at age three, I have been using computers to pursue many
              creative endeavors. Initially drawn to game development and
              video editing, my interest grew further during my year of
              learning Java in college. Leaping forward, I joined the Hack
              Reactor 9-month program, where I quickly progressed into creating
              responsive, fast, and user-friendly websites.
            </p>
            <p>
              I am incredibly excited about starting my career in a software job, and I am
              actively looking for opportunities where I can contribute my skills, embrace
              new challenges, and collaborate with like-minded professionals to create meaningful
              solutions that make a positive impact. Let the adventures begin!
            </p>
          </div>
          <a href='https://docs.google.com/document/d/1kKDpxAj89pdvM7fuX_NwD4Fm-WGjZPboeBkdYqjZgfg/edit?usp=sharing' rel="noreferrer" target="_blank" id={styles['resume-button']}>Resume</a>
          <img id={styles['click-icon']} src='./images/icons/click-icon.png'></img>
        </div>
        <div>
          <h2>My Skills</h2>
            <div id={styles.skills} onMouseLeave={() => setInfoDisplay(false)}>
              {skills.map((skill) => {
                return (
                  <div key={skill} className={styles.skill} onClick={() => setInfoDisplay(skillInfo[skill])} onMouseEnter={() => setInfoDisplay(skillInfo[skill])} onMouseLeave={() => setInfoDisplay(skillInfo[skill])}>{skill}</div>
                );
              })}
            </div>
            {infoDisplay ? <div id={styles.infoDisplay}>{infoDisplay}</div> : null}
        </div>
      </div>
    </div>
  );
};

export default About;
