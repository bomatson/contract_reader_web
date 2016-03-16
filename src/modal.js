import React from 'react';
import ReactDOM from 'react-dom';
import EmailForm from './components/form/emailForm.jsx';

const target = document.getElementById('emailSubmit');

if (!!target)
  ReactDOM.render(<EmailForm />, target);
