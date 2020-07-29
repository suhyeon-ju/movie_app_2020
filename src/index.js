import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


/*react application은 한번에 하나의 component만 redering 가능*/
ReactDOM.render(
  <React.StrictMode>
    <App />     
  </React.StrictMode>,
  document.getElementById('root')
);

