import React, { useState } from 'react';

import styles from './cssModules/aboutContact.module.css';
import ThankyouError from './smallWidgets/ThankyouError.jsx';

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [apiValue, setApiValue] = useState();

  const handleSubmit = async (e) => {
    setSending(true);
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        console.log('ok');
        setApiValue(true);
      } else {
        setApiValue(false);
      }
      setSending(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      setApiValue(false);
      setSending(false);
    }
  };

  return (
    <div id={styles.Contact} className={styles.widgets}>
      <h1 className='page-header' id='contact'>Contact</h1>
      <div className='underline' />
      <p id={styles['contact-me']}>Feel free to contact me. I may be available for freelance work. I am also currently seeking full-time or part-time employment.</p>
      {!sending && apiValue === undefined
        ? <form id={styles['message-form']} onSubmit={handleSubmit} action='https://formspree.io/f/mbjvoqal' method='POST'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' placeholder='Enter Your Name' required />
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' id='email' placeholder='Enter Your Email' required />
          <label htmlFor='message'>Message</label>
          <textarea type='text' name='message' id='Message' placeholder='Enter a Message' required />
          <button type='submit'>SUBMIT</button>
      </form>
        : sending ? <img src='./images/icons/loading.gif' id={styles.loading}/> : null
      }
      {apiValue !== undefined ? <ThankyouError ok={apiValue} setApiValue={setApiValue}/> : null}
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
    </div>
  );
};

export default Contact;
