import React from 'react';
import ReactDOM from 'react-dom';
import { Route , Routes } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";

import App from './App';
import {ThemeProvider} from './Context.js';

ReactDOM.render(
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path='/' element={<App/>}/>
          </Routes>
        </Router>
  </ThemeProvider>,
  document.getElementById('root')
);


/* ,
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject" */