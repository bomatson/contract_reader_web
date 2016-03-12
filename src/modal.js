import React from 'react';
import ReactDOM from 'react-dom';
import EmailSubmit from './components/emailSubmit.jsx';

let target = document.getElementById('emailSubmit');

if (!!target)
  ReactDOM.render(<EmailSubmit />, target);
