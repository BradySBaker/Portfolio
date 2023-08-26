import React from 'react';

import styles from './cssModules/aboutContact.module.css';

const Contact = () => {
  return (
    <div id={styles.Contact} className={styles.widgets}>
      <h1 className='page-header' id='contact'>Contact</h1>
      <div className='underline' />
      <div id={styles['contact-container']}>
      <div>
      <img src='./images/icons/email.png' />
      <h3>Email Me: </h3>
        <a href='mailto: bradybaker.dev@gmail.com'>bradybaker.dev@gmail.com</a>
      </div>
      <div>
        <img src='./images/icons/linkedin.png'/>
        <h3>Linked In:  </h3>
        <a href='https://www.linkedin.com/in/brady-s-baker/'>brady-s-baker</a>
      </div>
      <div>
        <img src='./images/icons/github.png'/>
        <h3>Github: </h3>
        <a href='https://github.com/BradySBaker'>BradySBaker</a>
      </div>
      </div>
      <a href='https://docs.google.com/document/d/1kKDpxAj89pdvM7fuX_NwD4Fm-WGjZPboeBkdYqjZgfg/edit?usp=sharing' id={styles['resume-button']} >Resume</a>
    </div>
  );
};

export default Contact;
