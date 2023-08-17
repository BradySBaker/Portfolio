import React, { useEffect, useState } from 'react';

import styles from '../cssModules/smallWidgetsStyles.module.css';

const buttons = { Home: '', Projects: '', About: '', Contact: '' };

const TopBar = () => {
  const [buttonElements, setButtonElements] = useState([]);
  useEffect(() => {
    const elements = [];
    for (const name in buttons) {
      elements.push(<div className={styles['top-buttons']} key={name}>{name}</div>);
    };
    setButtonElements(elements);
  }, []);
  return (
    <div id={styles['top-bar']}>
      {buttonElements}
    </div>
  );
};

export default TopBar;
