import React, { useEffect, useRef, useState } from 'react';
import styles from '../cssModules/smallWidgetsStyles.module.css';

const laptopPositionMap = { 780: 1, 685: 3, 575: 5, 485: 7, 380: 9, 280: 11 };
const phonePositionMap = { 780: 1, 685: 4, 575: 6, 485: 8, 380: 10, 280: 13 };

const ScrollAnimator = ({ src, gif, phone }) => {
  const [gifImage, setGifImage] = useState(null);

  let frameNum = 0;
  let currentSmoothFrameCall = 0;
  let lastTimestamp;
  const img = useRef();
  const smoothFrames = (newFrame, callNum) => {
    const end = phone ? 13 : 11;
    if (frameNum === end && !gifImage) {
      setGifImage(<img src={gif} id={phone ? styles.phoneImg : styles.laptopImg }/>);
    } else {
      setGifImage(null);
    }
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
      const positionMap = phone ? phonePositionMap : laptopPositionMap;
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
    <div style={{ overflow: 'hidden', maxWidth: '100vw' }}>
      <img
        id={phone ? styles['phone-animator'] : styles['laptop-animator']}
        src={'./images/' + src + '/' + frameNum + '.png'}
        ref={img}
        alt="Missing Src"
      />
      {gifImage}
    </div>
  );
};

export default ScrollAnimator;
