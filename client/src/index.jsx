import React, {useEffect} from 'react';
import { createRoot } from 'react-dom/client';

import ProfileIcon from './smallWidgets/ProfileIcon.jsx';

const App = () => {

  return (
    <div id="app">
      <ProfileIcon />
    </div>
  );
};

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App/>);