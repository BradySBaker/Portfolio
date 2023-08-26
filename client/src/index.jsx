import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import HomePage from './HomePage.jsx';
import TopBar from './smallWidgets/TopBar.jsx';

import ProjectPage from './ProjectPage.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const preloadImages = async () => {
    const namesAndAmount = [{ phone: 13 }, { laptop: 11 }];
    const etcImages = ['lake.jpg', 'me.png', '/projects/fec.gif', '/projects/ledcanvas.gif', '/projects/toyshare.gif'];
    const imagePromises = [];
    namesAndAmount.forEach((imgInfo) => {
      for (let frameNumber = 1; frameNumber <= imgInfo.amount; frameNumber++) {
        const image = new window.Image();
        image.src = `./images/${imgInfo.name}/${frameNumber}.png`;
        imagePromises.push(new Promise((resolve) => (image.onload = resolve)));
      }
    });

    etcImages.forEach((imgName) => {
      console.log(imgName);
      const image = new window.Image();
      image.src = './images/' + imgName;
      imagePromises.push(new Promise((resolve) => (image.onload = resolve)));
    });

    await Promise.all(imagePromises);
    setIsLoading(false);
  };

  useEffect(preloadImages, []);
  return (
    <div id="app" className="w-full">
      {isLoading
        ? <div id='loading'>
            BradyBaker
            <img src='./images/icons/loading.gif'/>
          </div>
        : <>
        <HomePage />
        <About />
        <ProjectPage />
        <Contact />
        <TopBar />
        <div className='credit'><a href="https://www.freepik.com/free-vector/home-screen-concept-illustration_11906660.htm#query=phone&position=0&from_view=author">Phone Image by StorySet</a> on Freepik</div>
        <a className='credit' href='https://www.youtube.com/channel/UCTU68v8yc35q-1u087DgMWw'>Laptop Art from GrafixM</a>
        <div id='ps'> P.S. This website was meticulously crafted from the ground up by me Brady Baker, with a touch of artistry in every line of code.</div>
      </>
      }
    </div>
  );
};

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App/>);
