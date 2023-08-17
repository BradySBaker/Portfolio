import React, {useEffect} from 'react';

const ProfileIcon = () => {
  useEffect(() => {
    const profilePhoto = document.getElementById('profile-icon');
    const handleScroll = () => {
      const maxScroll = profilePhoto.offsetHeight * 2;
      const scrollPosition = window.pageYOffset;
      console.log(scrollPosition + maxScroll)
      if (scrollPosition > maxScroll) {
        return;
      }
      profilePhoto.style.backgroundPositionY = `${-scrollPosition * .3}px`; // Adjust the factor for desired scrolling speed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      console.log('occured');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div id="profile-icon">
      <img src="./images/me.png"/>
    </div>
  )
}

export default ProfileIcon;