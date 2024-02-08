import React from 'react';
import logo from './logo.svg';
import dashboard from './dashboard';
import addArea from './addArea';
import showArea from './showArea';
import addAuth from './addAuth';
import showAuth from './showAuth';
import './App.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact Component={dashboard}></Route>
        <Route path='/addArea' Component={addArea}></Route>
        <Route path='/showArea' Component={showArea}></Route>
        <Route path='/addAuth' Component={addAuth}></Route>
        <Route path='/showAuth' Component={showAuth}></Route>  
      </Routes>
    </Router>
  );
}

export default App;
