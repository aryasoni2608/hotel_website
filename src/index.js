import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(

  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  </Router>,

  document.getElementById('root')
);