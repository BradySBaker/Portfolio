import React from 'react';

import styles from './cssModules/aboutContact.module.css';

const Contact = () => {
  return (
    <div id={styles.Contact} className={styles.widgets}>
      <h1 className='page-header' id='contact'>Contact</h1>
      <div className='underline' />
      <p id={styles['contact-me']}>Feel free to contact me. I may be available for freelance work. I am also currently seeking full-time or part-time employment.</p>
      <form id={styles['message-form']}>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' id='name' placeholder='Enter Your Name' required />
        <label htmlFor='email'>Email</label>
        <input type='text' name='email' id='email' placeholder='Enter Your Email' required />
        <label htmlFor='message'>Message</label>
        <textarea type='text' name='message' id='Message' placeholder='Enter a Message' required />
        <button>SUBMIT</button>
      </form>
      <div id={styles['contact-container']}>
      <div>
      <img src='./images/icons/email.png' />
      <h3>Email Me: </h3>
        <a href='mailto: bradybaker.dev@gmail.com' rel="noreferrer" target="_blank">bradybaker.dev@gmail.com</a>
      </div>
      <div>
        <img src='./images/icons/linkedin.png'/>
        <h3>Linked In:  </h3>
        <a href='https://www.linkedin.com/in/brady-s-baker/' rel="noreferrer" target="_blank">brady-s-baker</a>
      </div>
      <div>
        <img src='./images/icons/github.png'/>
        <h3>Github: </h3>
        <a href='https://github.com/BradySBaker' rel="noreferrer" target="_blank">BradySBaker</a>
      </div>
      </div>
      <a href='https://docs.google.com/document/d/1kKDpxAj89pdvM7fuX_NwD4Fm-WGjZPboeBkdYqjZgfg/edit?usp=sharing' rel="noreferrer" target="_blank" id={styles['resume-button']} >Resume</a>
    </div>
  );
};

export default Contact;
