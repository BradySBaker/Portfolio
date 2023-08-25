import React, { useRef, useEffect, useState } from 'react';

import styles from '../cssModules/smallWidgetsStyles.module.css';

const buttons = ['Home', 'Projects', 'About', 'Contact'];

const barPositionsWidth = { Home: {}, Projects: {}, About: {}, Contact: {} };
const sectionPositions = { Home: 0 };

let webHeight = 0;

let prevScrollPos = 0;

const scrollTo = (name) => {
  window.scrollTo({ top: sectionPositions[name], behavior: 'smooth' });
};

const TopBar = () => {
  const buttonRefs = useRef({});
  const [buttonElements, setButtonElements] = useState([]);
  const [barPositionWidth, setBarPosWidth] = useState({ pos: 0, width: 50 });

  const [refresh, setRefresh] = useState(false);

  const setPositions = () => {
    webHeight = document.getElementById('app').offsetHeight;

    if (buttonElements.length < 1 && !barPositionsWidth.Home.pos) {
      return;
    }

    window.scrollTo({ top: 0 });

    sectionPositions.Projects = document.getElementById('projects').getBoundingClientRect().top;
    sectionPositions.About = document.getElementById('about').getBoundingClientRect().top;
    sectionPositions.Contact = document.getElementById('contact').getBoundingClientRect().top;

    for (const name in buttonRefs.current) {
      const buttonElement = buttonRefs.current[name].current;
      if (buttonElement) {
        barPositionsWidth[name].pos = buttonElement.getBoundingClientRect().left;
        barPositionsWidth[name].width = buttonElement.offsetWidth;
      }
    }
    setBarPosWidth(barPositionsWidth.Home);
  };

  const handleResize = () => {
    setPositions();
    setRefresh((prevRefresh) => !prevRefresh);
  };

  useEffect(() => {
    webHeight = document.getElementById('app').offsetHeight;
    const elements = [];
    buttons.forEach((name) => {
      const buttonRef = React.createRef();
      elements.push(<div className={styles['top-buttons']} ref={buttonRef} id={name} key={name} onClick={() => scrollTo(name)}>{name}</div>);
      setButtonElements(elements);
      buttonRefs.current[name] = buttonRef;
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition + window.innerHeight + 5 >= webHeight) {
        setBarPosWidth(barPositionsWidth.Contact);
        return;
      }
      if (Math.abs(scrollPosition - prevScrollPos) < 50) { // For performance
        return;
      }
      prevScrollPos = scrollPosition;
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
        console.log(buttonRefs.current);
        setBarPosWidth(barPositionsWidth[minKey]);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(setPositions, [buttonElements]);

  return (
    <div id={styles['top-element']}>
      <div id={styles['top-bar']}>
        {buttonElements}
      </div>
      <svg id={styles['scroll-bar']}>
          <rect x={barPositionWidth.pos} id={styles.bar} width={barPositionWidth.width} fill='#0073cf' />
      </svg>
  </div>
  );
};
export default TopBar;
