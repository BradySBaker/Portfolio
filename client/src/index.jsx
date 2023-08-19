import React, { useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';

import HomePage from './HomePage.jsx';
import TopBar from './smallWidgets/TopBar.jsx';

import ProjectPage from './ProjectPage.jsx';

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const images = [];
    const imageGroups = { laptop: 11, phone: 13 };
    const max = 13;
    for (let i = 0; i < max; i++) {
      for (const imageGroup in imageGroups) {
        const count = imageGroup[imageGroups];
        if (i < count) {
          const img = new window.Image();
          img.src = './images/' + imageGroup + i + '.png';
          images.push(img);
        }
      }
    }

    Promise.all(images.map(img => {
      return new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });
    })).then(() => {
      setLoading(false);
      console.log('loading finished');
    }).catch(error => {
      console.error('Error preloading images:', error);
      setLoading(false);
    });
  }, []);

  return (
    <div id="app" className="w-full">
      {!loading
        ? <>
        <TopBar />
        <HomePage />
        <ProjectPage />
        <div><a href="https://www.freepik.com/free-vector/home-screen-concept-illustration_11906660.htm#query=phone&position=0&from_view=author">Image by storyset</a> on Freepik</div>
        <div>Laptop Art from GrafixM</div>
      </>
        : null}
    </div>
  );
};

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App/>);
