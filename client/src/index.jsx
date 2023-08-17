import React from 'react';
import { createRoot } from 'react-dom/client';

import HomePage from './HomePage.jsx';

const App = () => {
  return (
    <div id="app" className="w-full">
      <HomePage />
    </div>
  );
};

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App/>);
