import React, { useRef, useEffect, useState } from 'react';

import styles from '../cssModules/smallWidgetsStyles.module.css';

const buttons = { Home: '', Projects: '', About: '', Contact: '' };

const scrollPositions = {};
const sectionPositions = { Home: 0 };

const scrollTo = (name) => {
  console.log(name);
  console.log(sectionPositions[name])
  window.scrollTo({ top: sectionPositions[name], behavior: 'smooth' });
};

const TopBar = () => {
  const targetElementRef = useRef(null);
  const [buttonElements, setButtonElements] = useState([]);
  const [barPosition, setBarPosition] = useState(0);

  useEffect(() => {
    const elements = [];
    for (const name in buttons) {
      elements.push(<div className={styles['top-buttons']} id={name} key={name} onClick={() => scrollTo(name)}>{name}</div>);
    };
    setButtonElements(elements);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (!scrollPositions.Home) {
        return;
      }
      sectionPositions.Projects = document.getElementById('projects').getBoundingClientRect().top;
      sectionPositions.About = document.getElementById('about').getBoundingClientRect().top;
      sectionPositions.Contact = document.getElementById('contact').getBoundingClientRect().top;

      const elements = targetElementRef.current.children;
      for (let i = 0; i < elements.length; i++) {
        scrollPositions[elements[i].id] = elements[i].getBoundingClientRect().left;
      }
      setBarPosition(scrollPositions.Home);
    };
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let min;
      let minKey;
      for (const key in sectionPositions) {
        const distance = Math.abs(sectionPositions[key] - scrollPosition);
        if (distance < min || min === undefined) {
          min = distance;
          minKey = key;
        }
      }
      if (min !== undefined) {
        setBarPosition(scrollPositions[minKey]);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect((target) => {
    if (buttonElements.length < 1) {
      return;
    }
    sectionPositions.Projects = document.getElementById('projects').getBoundingClientRect().top;
    sectionPositions.About = document.getElementById('about').getBoundingClientRect().top;
    sectionPositions.Contact = document.getElementById('contact').getBoundingClientRect().top;

    const elements = targetElementRef.current.children;
    for (let i = 0; i < elements.length; i++) {
      scrollPositions[elements[i].id] = elements[i].getBoundingClientRect().left;
    }
    setBarPosition(scrollPositions.Home);
  }, [buttonElements]);

  return (
    <div id={styles['top-element']}>
      <div id={styles['top-bar']} ref={targetElementRef}>
        {buttonElements}
      </div>
      <svg id={styles['scroll-bar']}>
          <rect x={barPosition + 'px'} width='10%' height='5%' fill='#0073cf' rx="4px" ry="4px"/>
      </svg>
  </div>
  );
};
export default TopBar;
