import React from 'react';
import { createRoot } from 'react-dom/client';

import HomePage from './HomePage.jsx';
import TopBar from './smallWidgets/TopBar.jsx';

import ProjectPage from './ProjectPage.jsx';

const App = () => {
  return (
    <div id="app" className="w-full">
      <TopBar />
      <HomePage />
      <ProjectPage />
      <div><a href="https://www.freepik.com/free-vector/home-screen-concept-illustration_11906660.htm#query=phone&position=0&from_view=author">Image by storyset</a> on Freepik</div>
      <div>Laptop Art from GrafixM</div>
    </div>
  );
};

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App/>);
