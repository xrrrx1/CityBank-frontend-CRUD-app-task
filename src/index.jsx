/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './сontainers/App/App';
import * as serviceWorker from './serviceWorker';
import UsersStore from './context/UsersContext/UsersContextStore';

ReactDOM.render(
  <UsersStore>
    <App />
  </UsersStore>,

  document.getElementById('root'),
);

serviceWorker.unregister();
