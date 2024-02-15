import React, { useEffect } from 'react';
import feather from 'feather-icons';
import { Link } from 'react-router-dom';
function Header() {
  useEffect(() => {
    feather.replace();
  }, []);
  return(
    <>
  <nav className="navbar navbar-expand-lg main-navbar">
        <div className="form-inline mr-auto">
          <ul className="navbar-nav mr-3">
            <li><a href="#" data-toggle="sidebar" className="nav-link nav-link-lg
									collapse-btn"> <i data-feather="align-justify"></i></a></li>
            <li><a href="#" className="nav-link nav-link-lg fullscreen-btn">
                <i data-feather="maximize"></i>
              </a></li>
            <li>
              <form className="form-inline mr-auto">
                <div className="search-element">
                  <input className="form-control" type="search" placeholder="Search" aria-label="Search" data-width="200"/>
                  <button className="btn" type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </form>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav navbar-right">
          <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown"
              className="nav-link nav-link-lg message-toggle"><i data-feather="mail"></i>
              <span className="badge headerBadge1">
                </span> </a>
            <div className="dropdown-menu dropdown-list dropdown-menu-right pullDown">
              <div className="dropdown-header">
                Messages
                <div className="float-right">
                  <a href="#">Mark All As Read</a>
                </div>
              </div>
             
              <div className="dropdown-footer text-center">
                <a href="#">View All <i className="fas fa-chevron-right"></i></a>
              </div>
            </div>
          </li>
          <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown"
              className="nav-link notification-toggle nav-link-lg"><i data-feather="bell"></i>
              <span className="badge headerBadge2">
                 </span> </a>
            <div className="dropdown-menu dropdown-list dropdown-menu-right pullDown">
              <div className="dropdown-header">
                Notifications
                <div className="float-right">
                  <a href="#">Mark All As Read</a>
                </div>
              </div>
              
              <div className="dropdown-footer text-center">
                <a href="#">View All <i className="fas fa-chevron-right"></i></a>
              </div>
            </div>
          </li>
          <li className="dropdown"><a href="#" data-toggle="dropdown"
              className="nav-link dropdown-toggle nav-link-lg nav-link-user"> <img alt="image" src="assets/img/user.png"
                className="user-img-radious-style"/> <span className="d-sm-none d-lg-inline-block"></span></a>
            <div className="dropdown-menu dropdown-menu-right pullDown">
              <div className="dropdown-title">Hello Sarah Smith</div>
              <a href="profile.html" className="dropdown-item has-icon"> <i className="far
										fa-user"></i> Profile
              </a> <a href="timeline.html" className="dropdown-item has-icon"> <i className="fas fa-bolt"></i>
                Activities
              </a> <a href="#" className="dropdown-item has-icon"> <i className="fas fa-cog"></i>
                Settings
              </a>
              <div className="dropdown-divider"></div>
              <a href="auth-login.html" className="dropdown-item has-icon text-danger"> <i className="fas fa-sign-out-alt"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
      <div className="main-sidebar sidebar-style-2">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <a href="index.html"> <img alt="image" src="assets/img/logo.png" className="header-logo" /> <span
                className="logo-name">DAY-MAKER</span>
            </a>
          </div>
          <div className="sidebar-user">
            <div className="sidebar-user-picture">
              <img alt="image" src="assets/img/userbig.png"/>
            </div>
            <div className="sidebar-user-details">
              <div className="user-name">Sarah Smith</div>
              <div className="user-role">Administrator</div>
            </div>
          </div>
          <ul className="sidebar-menu">
            <li className="menu-header">Main</li>
            <li className="dropdown active">
              <Link to="/" className="nav-link"><i data-feather="monitor"></i><span>Dashboard</span></Link>
            </li>
            <li className="dropdown">
              <Link to="/showCity" className="nav-link"><i data-feather="map"></i><span>City</span></Link>
            </li>
            <li className="dropdown">
              <Link to="/showArea" className="nav-link"><i data-feather="map-pin"></i><span>Area</span></Link>
            </li>
            <li className="dropdown">
              <Link to="/showEmployee" className="nav-link"><i data-feather="user"></i><span>Employee</span></Link>
            </li>
            <li className="dropdown">
              <Link to="/showCustomer" className="nav-link"><i data-feather="users"></i><span>Customer</span></Link>
            </li>
            <li className="dropdown">
              <Link to="/showEmployeeEvent" className="nav-link"><i data-feather="mic"></i><span>EmployeeEvent</span></Link>
            </li>
            <li className="dropdown">
              <Link to="/showEventBooking" className="nav-link"><i data-feather="mic"></i><span>EventBooking</span></Link>
            </li>
            <li className="dropdown">
              <Link to="/showEventDetail" className="nav-link"><i data-feather="mic"></i><span>EventDetail</span></Link>
            </li>
          </ul>
          <li className="dropdown">
              <Link to="/showHotel" className="nav-link"><i data-feather="mic"></i><span>Hotel</span></Link>
            </li>
            <li className="dropdown">
              <Link to="/showImage" className="nav-link"><i data-feather="mic"></i><span>Image</span></Link>
            </li>
        </aside>
      </div>
  </>
 );
 }
 export default Header;