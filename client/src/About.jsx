import React from 'react';

import styles from './cssModules/aboutContact.module.css';

const skills = ['JavaScript', 'HTML', 'CSS', 'React.js', 'Git', 'Node.js', 'Docker', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redux', 'EC2/S3', 'Babel.js', 'Jest', 'NginX', 'Collaboration', 'Many More'];

const About = () => {
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
        </div>
        <div>
          <h2>My Skills</h2>
            <div id={styles.skills}>
              {skills.map((skill) => {
                return (
                  <div key={skill} className={styles.skill}>{skill}</div>
                );
              })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
