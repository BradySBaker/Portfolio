import React, { useEffect, useRef } from 'react';
import styles from '../cssModules/smallWidgetsStyles.module.css';

let frameNum = 0;

const positionMap = { 780: 1, 685: 3, 575: 5, 485: 7, 380: 9, 280: 11 };
let currentSmoothFrameCall = 0;

let lastTimestamp;

const Laptop = () => {
  const laptopImg = useRef();

  const smoothFrames = (newFrame, callNum) => {
    if (callNum !== currentSmoothFrameCall) {
      return;
    }
    if (newFrame === frameNum) {
      return;
    }
    const now = performance.now();
    if (now - lastTimestamp >= 1000 / 15 || !lastTimestamp) { // Aim for 30 fps
      lastTimestamp = now;
      if (newFrame < frameNum) {
        frameNum--;
      } else {
        frameNum++;
      }
      laptopImg.current.src = `./images/laptop/${frameNum}.png`;
    }
    window.requestAnimationFrame(() => smoothFrames(newFrame, callNum, lastTimestamp));
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = laptopImg.current.getBoundingClientRect().top;
      let newFrame;
      for (const num in positionMap) {
        if (position <= num) {
          newFrame = positionMap[num];
          break;
        }
      }
      if (newFrame === frameNum || newFrame === undefined) {
        return;
      }
      currentSmoothFrameCall++;
      smoothFrames(newFrame, currentSmoothFrameCall);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <img
        id={styles.laptop}
        src={`./images/laptop/${frameNum}.png`}
        ref={laptopImg}
        alt="Laptop"
      />
    </div>
  );
};

export default Laptop;
