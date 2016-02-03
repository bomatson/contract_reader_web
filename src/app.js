import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

let target = document.getElementById('submission');

if (!!target)
  ReactDOM.render(<App />, target);
