import React, { useEffect, useRef } from 'react';

import styles from '../cssModules/smallWidgetsStyles.modules.css';

const ProfileIcon = () => {
  const profileIcon = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = profileIcon.current.offsetHeight * 2;
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > maxScroll) {
        return;
      }
      profileIcon.current.style.backgroundPositionY = `${-scrollPosition * 0.3}px`; // Adjust the factor for desired scrolling speed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div id={styles['profile-icon']} ref={profileIcon}>
      <img src="./images/me.png"/>
    </div>
  );
};

export default ProfileIcon;
