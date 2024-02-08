import React from 'react';
import logo from './logo.svg';
import dashboard from './dashboard';
import addArea from './addArea';
import showArea from './showArea';
import addAuth from './addAuth';
import showAuth from './showAuth';
import addCity from './addCity';
import showCity from './showCity';
import addCustomer from './addCustomer';
import showCustomer from './showCustomer';
import addEmployee from './addEmployee';
import showEmployee from './showEmployee';
import addEmployeeEvent from './addEmployeeEvent';
import showEmployeeEvent from './showEmployeeEvent';
import addEventBooking from './addEventBooking';
import showEventBooking from './showEventBooking';
import addEventDetail from './addEventDetail';
import showEventDetail from './showEventDetail';
import addHotel from './addHotel';
import showHotel from './showHotel';
import addImage from './addImage';
import showImage from './showImage';
import addInquiry from './addInquiry';
import showInquiry from './showInquiry';
import addPackageDetail from './addPackageDetail';
import showPackageDetail from './showPackageDetail';
import addVendor from './addVendor';
import showVendor from './showVendor';
import addVendorCategory from './addVendorCategory';
import showVendorCategory from './showVendorCategory';
import addVenue from './addVenue';
import showVenue from './showVenue';
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
        <Route path='/addCity' Component={addCity}></Route>
        <Route path='/showCity' Component={showCity}></Route>  
        <Route path='/addCustomer' Component={addCustomer}></Route>
        <Route path='/showCustomer' Component={showCustomer}></Route>  
        <Route path='/addEmployee' Component={addEmployee}></Route>
        <Route path='/showEmployee' Component={showEmployee}></Route>  
        <Route path='/addEmployeeEvent' Component={addEmployeeEvent}></Route>
        <Route path='/showEmployeeEvent' Component={showEmployeeEvent}></Route>  
        <Route path='/addEventBooking' Component={addEventBooking}></Route>
        <Route path='/showEventBooking' Component={showEventBooking}></Route>  
        <Route path='/addEventDetail' Component={addEventDetail}></Route>
        <Route path='/showEventDetail' Component={showEventDetail}></Route>  
        <Route path='/addHotel' Component={addHotel}></Route>
        <Route path='/showHotel' Component={showHotel}></Route>  
        <Route path='/addImage' Component={addImage}></Route>
        <Route path='/showImage' Component={showImage}></Route>  
        <Route path='/addInquiry' Component={addInquiry}></Route>
        <Route path='/showInquiry' Component={showInquiry}></Route>  
        <Route path='/addPackageDetail' Component={addPackageDetail}></Route>
        <Route path='/showPackageDetail' Component={showPackageDetail}></Route>  
        <Route path='/addVendor' Component={addVendor}></Route>
        <Route path='/showVendor' Component={showVendor}></Route> 
        <Route path='/addVendorCategory' Component={addVendorCategory}></Route>
        <Route path='/showVendorCategory' Component={showVendorCategory}></Route> 
        <Route path='/addVenue' Component={addVenue}></Route>
        <Route path='/showVenue' Component={showVenue}></Route> 
      </Routes>
    </Router>
  );
}

export default App;
