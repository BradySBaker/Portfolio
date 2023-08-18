import React, { useEffect, useRef } from 'react';
import styles from '../cssModules/smallWidgetsStyles.module.css';

const ScrollAnimator = ({ src, positionMap, width }) => {
  let frameNum = 0;
  let currentSmoothFrameCall = 0;
  let lastTimestamp;
  const img = useRef();

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
      img.current.src = './images/' + src + '/' + frameNum + '.png';
    }
    window.requestAnimationFrame(() => smoothFrames(newFrame, callNum, lastTimestamp));
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = img.current.getBoundingClientRect().top;
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
        id={styles.scrollAnimator}
        src={'./images/' + src + '/' + frameNum + '.png'}
        ref={img}
        style={{ width }}
        alt="Missing Src"
      />
    </div>
  );
};

export default ScrollAnimator;
