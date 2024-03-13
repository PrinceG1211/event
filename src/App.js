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
import AdminLogin from './login';




function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact Component={dashboard}></Route>
        {/* Area */}
        <Route path='/addArea' Component={addArea}></Route>
        <Route path='/editArea/:id' Component={addArea}></Route>
        <Route path='/showArea' Component={showArea}></Route>
        {/* City */}
        <Route path='/addCity' Component={addCity}></Route>
        <Route path='/editCity/:id' Component={addCity}></Route>
        <Route path='/showCity' Component={showCity}></Route>  
        {/* Customer */}
        <Route path='/addCustomer' Component={addCustomer}></Route>
        <Route path='/editCustomer/:id' Component={addCustomer}></Route>
        <Route path='/showCustomer' Component={showCustomer}></Route> 
        {/* Emplyoeee */}
        <Route path='/addEmployee' Component={addEmployee}></Route>
        <Route path='/editEmployee/:id' Component={addEmployee}></Route>
        <Route path='/showEmployee' Component={showEmployee}></Route> 
        {/* EmployeeEvent */}
        <Route path='/addEmployeeEvent' Component={addEmployeeEvent}></Route>
        <Route path='/editEmployeeEvent/:id' Component={addEmployeeEvent}></Route>
        <Route path='/showEmployeeEvent' Component={showEmployeeEvent}></Route>
        
         {/* EventBooking */}
         <Route path='/addEventBooking' Component={addEventBooking}></Route>
         <Route path='/EventBooking/EventDetail/:id/:type' Component={showEventDetail}></Route>
        <Route path='/editEventBooking/:id' Component={addEventBooking}></Route>
        <Route path='/showEventBooking' Component={showEventBooking}></Route> 
         {/* EventDetail */}
         <Route path='/addEventDetail' Component={addEventDetail}></Route>
         <Route path='/editEventDetail/:id/:type' Component={addEventDetail}></Route>
        <Route path='/showEventDetail' Component={showEventDetail}></Route> 
        {/* Hotel */}
        <Route path='/addHotel' Component={addHotel}></Route>
        <Route path='/editHotel/:id' Component={addHotel}></Route>
        <Route path='/showHotel' Component={showHotel}></Route>  
        {/* Inquiry */}
        <Route path='/addInquiry' Component={addInquiry}></Route>
        <Route path='/editInquiry/:id' Component={addInquiry}></Route>
        <Route path='/showInquiry' Component={showInquiry}></Route> 
        {/* PackageDetail */}
        <Route path='/addPackageDetail' Component={addPackageDetail}></Route>
        <Route path='/editPackageDetail/:id' Component={addPackageDetail}></Route>
        <Route path='/showPackageDetail' Component={showPackageDetail}></Route>  
        {/* Vendor */}
        <Route path='/addVendor' Component={addVendor}></Route>
        <Route path='/editVendor/:id' Component={addVendor}></Route>
        <Route path='/showVendor' Component={showVendor}></Route> 
        {/* VendorCategory */}
        <Route path='/addVendorCategory' Component={addVendorCategory}></Route>
        <Route path='/editVendorCategory/:id' Component={addVendorCategory}></Route>
        <Route path='/showVendorCategory' Component={showVendorCategory}></Route> 
        {/* Venue */}
        <Route path='/addVenue' Component={addVenue}></Route>
        <Route path='/editVenue/:id' Component={addVenue}></Route>
        <Route path='/showVenue' Component={showVenue}></Route>
        {/* login */}
        <Route path='/login' Component={AdminLogin}></Route>
        
      </Routes>
    </Router>
  );
}

export default App;
