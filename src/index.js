import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css';
import App from './App';

ReactDOM.render(
  <Auth0Provider
    domain='aroby-r.us.auth0.com'
    clientId='QQMkuWeOmeURFAdBcz8Us4z1ybNcJW7Q'
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);