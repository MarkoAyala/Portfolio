import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from './Context.js';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);


/* ,
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject" */