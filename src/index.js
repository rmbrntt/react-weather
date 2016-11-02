import React from 'react';
import ReactDOM from 'react-dom';
var routes = require('./config/routes');

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

ReactDOM.render(
  routes,
  document.getElementById('app')
);
