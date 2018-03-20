import React from 'react';
import ReactDOM from 'react-dom';
import Box from "./box"; 
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Box />, 
  document.getElementById('root'));
registerServiceWorker();
