import React, { useEffect, useState } from 'react';
import feather from 'feather-icons';
import { Link, useNavigate } from 'react-router-dom';
import { Variables } from '../utils/Variables';
function Header() {
  useEffect(() => {
    fetchAuth();
    feather.replace();
  }, []);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Login :" + sessionStorage.getItem("isLogin"));
    setIsLoggedIn(sessionStorage.getItem("isLogin"));
    if (sessionStorage.getItem("isLogin")) {
      console.log("User ID : " + sessionStorage.getItem("userID"));
      const userID = sessionStorage.getItem("userID");
      fetchAuth(userID);
    }
  }, []);
  const logout = () => {
    sessionStorage.clear();
    navigate("/login");
  }
  const fetchAuth = (id) => {
    try {
      const url = Variables.apiURL + "Auth/" + id;
      fetch(url, {
        method: "GET",
        headers: { accept: "Application/json", "content-type": "Application/json", },
      }).then((response) => response.json())
        .then((data) => {
          console.log(data);

          setName(data.data.userName);
          setImage(data.data.image);
        }, (error) => {
          console.log(error);
          alert("Failed");
        });
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  return (
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
                  <input className="form-control" type="search" placeholder="Search" aria-label="Search" data-width="200" />
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

          {!isLoggedIn ? (<>

            <li><a href="login">Login</a></li>
          </>
          ) : (<>
            <li> 
              <ul>
                <li className="dropdown"><a href="#" data-toggle="dropdown"
                  className="nav-link dropdown-toggle nav-link-lg nav-link-user"> <img alt="image" src="assets/img/user.png"
                    className="user-img-radious-style" /> <span className="d-sm-none d-lg-inline-block"></span></a>
                  <div className="dropdown-menu dropdown-menu-right pullDown">
                    <div className="dropdown-title">{name}</div>
                    <a href="profile.html" className="dropdown-item has-icon"> <i className="far
										fa-user"></i> Profile
                    </a> <a href="timeline.html" className="dropdown-item has-icon"> <i className="fas fa-bolt"></i>
                      Activities
                    </a> <a href="#" className="dropdown-item has-icon"> <i className="fas fa-cog"></i>
                      Settings
                    </a>
                    <a onClick={() => logout()} className="dropdown-item has-icon text-danger"> <i className="fas fa-sign-out-alt"></i>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
          </li>
        </>)}
      </ul>

    </nav >
      <div className="main-sidebar sidebar-style-2">
        <aside id="sidebar-wrapper">

          <div className="sidebar-user">
            <div className="sidebar-user-picture">
              <img alt="image" src="assets/img/logoadmin.png" height={100} width={120} />
            </div>
            <div className="sidebar-user-details">
              <div className="user-name">DAY MAKER</div>
              <div className="user-role">EVENT MANAGEMENT</div>
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
              <Link to="/showEventBooking" className="nav-link"><i data-feather="calendar"></i><span>EventBooking</span></Link>
            </li>
            <li className="dropdown">
              <Link to="/showEventDetail" className="nav-link"><i data-feather="list"></i><span>EventDetail</span></Link>
            </li>
            <li className="dropdown">
              <Link to="/showHotel" className="nav-link"><i data-feather="home"></i><span>Hotel</span></Link>
            </li>
            <li className="dropdown">
              <Link to="/showImage" className="nav-link"><i data-feather="image"></i><span>Image</span></Link>
            </li>
            <li className="dropdown">
              <Link to="/showInquiry" className="nav-link"><i data-feather="info"></i><span>Inquiry</span></Link>
            </li>
            <li className="dropdown">
              <Link to="/showPackageDetail" className="nav-link"><i data-feather="package"></i><span>PackageDetail</span></Link>
            </li>
            <li className="dropdown">
              <Link to="/showVendor" className="nav-link"><i data-feather="user-check"></i><span>Vendor</span></Link>
            </li>
            <li className="dropdown">
              <Link to="/showVendorCategory" className="nav-link"><i data-feather="codepen"></i><span>VendorCategory</span></Link>
            </li>
            <li className="dropdown">
              <Link to="/showVenue" className="nav-link"><i data-feather="map-pin"></i><span>Venue</span></Link>
            </li>
          </ul>


        </aside>
      </div>
  </>
 );
}
export default Header;