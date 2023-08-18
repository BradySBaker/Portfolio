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
    </div>
  );
};

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App/>);
