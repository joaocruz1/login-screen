import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/global'
import Login from './pages/login/index.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Login />
  </React.StrictMode>
);