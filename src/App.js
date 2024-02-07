import logo from './logo.svg';
import './App.css';
import dashboard from './dashboard';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import showArea from './showArea';
import addArea from './addArea';
function Dashboard() {
  return (
    <Router>
    <Routes>
    <Route path='/' exact Component={dashboard}></Route>
    <Route path='/showArea' Component={showArea}></Route>
    <Route path='/addArea' Component={addArea}></Route>
  </Routes>
  </Router>
  );
}

export default Dashboard;
