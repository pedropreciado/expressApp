import React from 'react';
import ReactDOM from 'react-dom';
import Box from "./box"; 
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Box 
  url={`http://localhost:3001/api/comments`}
  pollInterval={2000}
  />, 
  document.getElementById('root')
);
  
registerServiceWorker();
