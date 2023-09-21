import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes'; 

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
);
