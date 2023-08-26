import React from 'react';

import styles from '../cssModules/smallWidgetsStyles.module.css';

const ThankyouError = ({ ok, setApiValue }) => {
  return (
    <div>
      {ok
        ? <div className={styles['thankyou-error']}>Thankyou for the email I will get to it as soon as possible!</div>
        : <>
         <div className={styles['thankyou-error']} style={{ backgroundColor: 'red' }}>There was an error submitting the email are you sure your email is accurate?</div>
         <button className={styles['thankyou-error']} onClick={() => setApiValue()}>Try Again</button>
        </>
      }
    </div>
  );
};

export default ThankyouError;
