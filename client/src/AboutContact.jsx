import React from 'react';

import styles from './cssModules/aboutContact.module.css';

const skills = ['JavaScript', 'HTML', 'CSS', 'React.js', 'Git', 'Node.js', 'Docker', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redux', 'EC2/S3', 'Babel.js', 'Jest', 'NginX', 'Many More'];

const AboutContact = () => {
  return (
    <div id={styles.widget}>
      <h1 className='page-header'>About Me</h1>
      <div className='underline' />
      <div id={styles['about-me-container']}>
        <div>
          <h2>Get to know me</h2>
          <p>
            I am a passionate problem-solver who enjoys all aspects of programming
            - from backend functionality and front-end development to databases and
            coding challenges. Overcoming technical roadblocks is my forte, and
            I thrive in the ever-changing software engineering environment. I am
            incredibly excited about starting my career in a software job, and I am
            actively looking for opportunities where I can contribute my skills, embrace
            new challenges, and collaborate with like-minded professionals to create meaningful
            solutions that make a positive impact. Let the adventures begin!
          </p>
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

export default AboutContact;
