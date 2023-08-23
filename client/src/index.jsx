import React from 'react';
import { createRoot } from 'react-dom/client';

import HomePage from './HomePage.jsx';
import TopBar from './smallWidgets/TopBar.jsx';

import ProjectPage from './ProjectPage.jsx';

import AboutContact from './AboutContact.jsx';

const App = () => {
  return (
    <div id="app" className="w-full">
      <HomePage />
      <ProjectPage />
      <AboutContact />
      <TopBar />
      <div className='credit'><a href="https://www.freepik.com/free-vector/home-screen-concept-illustration_11906660.htm#query=phone&position=0&from_view=author">Phone Image by StorySet</a> on Freepik</div>
      <a className='credit' href='https://www.youtube.com/channel/UCTU68v8yc35q-1u087DgMWw'>Laptop Art from GrafixM</a>
    </div>
  );
};

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App/>);
