import React from 'react';

import ProfileIcon from './smallWidgets/ProfileIcon.jsx';

const HomePage = () => {
  return (
    <div id='homePage' className='relative text-center'>
      <div className='mb-6'>
        <ProfileIcon />
      </div>
      <div className='text-white'>
        <h1 className='font-semibold text-4xl sm:text-7xl'>Brady Baker</h1>
        <h2 className='font-light opacity-70 text-2xl sm:text-4xl mt-2 sm:mt-10'>Software Developer</h2>
      </div>
    </div>
  )
}

export default HomePage;
