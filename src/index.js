import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './App';

import './assets/styles/styles.scss';

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline>
      <App />
    </CssBaseline>
  </BrowserRouter>,
  document.getElementById('root'),
);
