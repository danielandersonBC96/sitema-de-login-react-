import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login/index';
import Input from './Components/input';
import GlobalStyled from './styles/global';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <GlobalStyled/> 
    <Login/>
  </React.StrictMode>
);
