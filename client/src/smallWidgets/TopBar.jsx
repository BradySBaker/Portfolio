import React, { useRef, useEffect, useState } from 'react';

import styles from '../cssModules/smallWidgetsStyles.module.css';

const buttons = [ 'Home', 'Projects', 'About', 'Contact'];

const barPositionsWidth = {Home: {}, Projects: {}, About: {}, Contact: {}};
const sectionPositions = { Home: 0 };

let webHeight = 0;

let prevScrollPos = 0;

const scrollTo = (name) => {
  window.scrollTo({ top: sectionPositions[name], behavior: 'smooth' });
};

const reload = () => {
  location.reload();
};

const TopBar = () => {
  const targetElementRef = useRef(null);
  const [buttonElements, setButtonElements] = useState([]);
  const [barPositionWidth, setBarPosWidth] = useState({pos: 0, width: 50});
  const setPositions = () => {
    webHeight = document.getElementById('app').offsetHeight;

    if (buttonElements.length < 1  &&  !barPositionsWidth.Home.pos) {
      return;
    }

    window.scrollTo({ top: 0 });

    sectionPositions.Projects = document.getElementById('projects').getBoundingClientRect().top;
    sectionPositions.About = document.getElementById('about').getBoundingClientRect().top;
    sectionPositions.Contact = document.getElementById('contact').getBoundingClientRect().top;
    const elements = targetElementRef.current.children;
    for (let i = 0; i < elements.length; i++) {
    const curName = elements[i].id;
     barPositionsWidth[curName].pos = elements[i].getBoundingClientRect().left;
     barPositionsWidth[curName].width = elements[i].offsetWidth;
    }
    setBarPosWidth(barPositionsWidth.Home);
  };

  useEffect(() => {
    webHeight = document.getElementById('app').offsetHeight;
    const elements = [];
    buttons.forEach((name) => {
      elements.push(<div className={styles['top-buttons']} id={name} key={name} onClick={() => scrollTo(name)}>{name}</div>);
      setButtonElements(elements);
    })}, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;      
      if (scrollPosition + window.innerHeight + 5>= webHeight) {
        setBarPosWidth(barPositionsWidth.Contact);
        return;
      }
      if (Math.abs(scrollPosition - prevScrollPos) < 50) { //For performance
        return;
      }
      prevScrollPos = scrollPosition;
      let min;
      let minKey;
      for (const key in sectionPositions) {
        let distance = Math.abs(sectionPositions[key] - scrollPosition);
        if (distance < min || min === undefined) {
          min = distance;
          minKey = key;
        }
      }
      if (min !== undefined) {
        setBarPosWidth(barPositionsWidth[minKey]);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', reload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', reload);
    };
  }, []);

  useEffect(setPositions, [buttonElements]);

  return (
    <div id={styles['top-element']}>
      <div id={styles['top-bar']} ref={targetElementRef}>
        {buttonElements}
      </div>
      <svg id={styles['scroll-bar']}>
          <rect x={barPositionWidth.pos + 'px'} id={styles.bar} width={barPositionWidth.width + 'px'} fill='#0073cf' rx=".4rem" ry=".4rem"/>
      </svg>
  </div>
  );
};
export default TopBar;
