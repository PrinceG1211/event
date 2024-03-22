import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";
import { useEffect, useState } from "react";
import { Variables } from "./utils/Variables";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {

    const [VendorList, setVendorList] = useState([]);
    const [EmployeeList, setEmployeeList] = useState([]);
    const [eventDetailList, setEventDetailList] = useState([]);
    const [customerList, setCustomerList] = useState([]);
    const [areaList, setAreaList] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [eventBooking, setEventBooking] = useState([]);
    const [totalIncome, setTotalIncome] = useState([]);
    const [employeeEvent, setEmployeeEvent] = useState([]);
    const navigate = useNavigate();
    const currencyOptions = {
        style: 'currency',
        currency: 'INR' // Indian Rupee
      };
    
    useEffect(() => {
        if (!sessionStorage.getItem("isLogin")) {
            navigate("/login");
          }
        fetchVendor()
        fetchEmployee()
        fetchEventDetailList()
        fetchCustomerList()
        fetchArea()
        fetchCity()
        fetchEventBooking()
        fetchEmployeeEvent()
        fetchIncome()

    }, []);

    const fetchVendor = () => {
        fetch(Variables.apiURL + "Vendor", {
            method: "GET",
            headers: {
                accept: "Application/json",
                "content-type": "Application/json",
                // "Authorization": "Bearer " + token
            }
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                if(data.status === "success"){
                    setVendorList(data.data);
                }else{
                    setVendorList([]);
                }
                
            }, (error) => {
                console.log(error);
                setVendorList([]);
                alert("Failed");
            });
    };

    const fetchEmployee = () => {
        fetch(Variables.apiURL + "Employee", {
            method: "GET",
            headers: {
                accept: "Application/json",
                "content-type": "Application/json",
                // "Authorization": "Bearer " + token
            }
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                if(data.status === "success"){
                    setEmployeeList(data.data);
                }else{
                    setEmployeeList([]);
                }
               
            }, (error) => {
                console.log(error);
                setEmployeeList([]);
                alert("Failed");
            });
    };

    const fetchEventDetailList = () => {
        fetch(Variables.apiURL + "EventDetail", {
            method: "GET",
            headers: {
                accept: "Application/json",
                "content-type": "Application/json",
                // "Authorization": "Bearer " + token
            }
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                if(data.status === "success"){
                    setEventDetailList(data.data);
                }else{
                    setEventDetailList([]);
                }
                
            }, (error) => {
                console.log(error);
                setEventDetailList([]);
                alert("Failed");
            });
    };

    const fetchCustomerList = () => {
        fetch(Variables.apiURL + "Customer", {
            method: "GET",
            headers: {
                accept: "Application/json",
                "content-type": "Application/json",
                // "Authorization": "Bearer " + token
            }
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                if(data.status === "success"){
                    setCustomerList(data.data);
                }else{
                    setCustomerList([]);
                }
                
            }, (error) => {
                console.log(error);
                setCustomerList([]);
                alert("Failed");
            });
    };

    const fetchArea = () => {
        fetch(Variables.apiURL + "Area", {
            method: "GET",
            headers: {
                accept: "Application/json",
                "content-type": "Application/json",
                // "Authorization": "Bearer " + token
            }
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                if(data.status === "success"){
                    setAreaList(data.data);
                }else{
                    setAreaList([]);
                }
                
            }, (error) => {
                console.log(error);
                setAreaList([]);
                alert("Failed");
            });
    };

    
    const fetchCity = () => {
        fetch(Variables.apiURL + "City", {
            method: "GET",
            headers: {
                accept: "Application/json",
                "content-type": "Application/json",
                // "Authorization": "Bearer " + token
            }
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                if(data.status === "success"){
                    setCityList(data.data);
                }else{
                    setCityList([]);
                }
                
            }, (error) => {
                console.log(error);
                setCityList([]);
                alert("Failed");
            });
    };
    
    const fetchEventBooking = () => {
        fetch(Variables.apiURL + "EventBooking", {
            method: "GET",
            headers: {
                accept: "Application/json",
                "content-type": "Application/json",
                // "Authorization": "Bearer " + token
            }
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                if(data.status === "success"){
                    setEventBooking(data.data);
                }else{
                    setEventBooking([]);
                }
            }, (error) => {
                console.log(error);
                setEventBooking([]);
                alert("Failed");
            });
    };

    const fetchIncome = () => {
        var url = Variables.apiURL + "EventBooking/income";
    if(sessionStorage.getItem("userType") === "Vendor"){
      url = Variables.apiURL + "EventBooking/getbyVendorincome/"+sessionStorage.getItem("userID"); 
    } 
        fetch(url, {
            method: "GET",
            headers: {
                accept: "Application/json",
                "content-type": "Application/json",
                // "Authorization": "Bearer " + token
            }
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                setTotalIncome(new Intl.NumberFormat('en-IN', currencyOptions).format(0));
                if(data.data != null)
                {
                setTotalIncome(new Intl.NumberFormat('en-IN', currencyOptions).format(data.data.TotalPackagePrice));
                }
               
            }, (error) => {
                console.log(error);
                setTotalIncome([]);
                alert("Failed");
            });
    };
      
    const fetchEmployeeEvent = () => {
        fetch(Variables.apiURL + "EmployeeEvent", {
            method: "GET",
            headers: {
                accept: "Application/json",
                "content-type": "Application/json",
                // "Authorization": "Bearer " + token
            }
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                if(data.status === "success"){
                    setEmployeeEvent(data.data);
                }else{
                    setEmployeeEvent([]);
                }
                
            }, (error) => {
                console.log(error);
                setEmployeeEvent([]);
                alert("Failed");
            });
    };
    useScript("/assets/bundles/echart/echarts.js");
    useScript("/assets/bundles/chartjs/chart.min.js");
    useScript("/assets/js/page/index.js");
    useScript("/assets/js/scripts.js");
    useScript("/assets/js/custom.js");
    return (<>
        <Header></Header>
        {sessionStorage.getItem("userType") == "Admin" ? (<>

        <div class="main-content">
            <section class="section">
                <div class="row ">
                    <div class="col-xl-3 col-lg-6">
                    <Link to="/showVendor">
                        <div class="card">
                            <div class="card-bg">
                                <div class="p-t-20 d-flex justify-content-between">
                                    <div class="col">
                                        <h4 class="mb-0">Vendor</h4>
                                        <br />
                                        <h4><span>{VendorList ? VendorList.length : 0}</span></h4>
                                    </div>
                                    <i class="fas fa-male col-green font-40 p-r-40"></i>
                                </div>
                                <canvas id="cardChart1" height="80"></canvas>
                            </div>
                        </div>
                        
                    </Link>
                    </div>
                
                        <div class="col-xl-3 col-lg-6">
                        <Link to="/showEmployee">
                        <div class="card">
                            <div class="card-bg">
                                <div class="p-t-20 d-flex justify-content-between">
                                    <div class="col">
                                        <h4 class="mb-0">Employee</h4>
                                        <br />
                                        <h4><span>{EmployeeList ? EmployeeList.length : 0}</span></h4>
                                    </div>
                                    <i class="fas fa-id-card-alt col-orange font-30 p-r-30"></i>
                                </div>
                                <canvas id="cardChart1" height="80"></canvas>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div class="col-xl-3 col-lg-6">
                    <Link to="/showEventDetail">
                        <div class="card">
                            <div class="card-bg">
                                <div class="p-t-20 d-flex justify-content-between">
                                    <div class="col">
                                        <h4 class="mb-0">Event</h4>
                                        <br />
                                        <h4><span>{eventDetailList ? eventDetailList.length : 0}</span></h4>
                                    </div>
                                    <i class="fas fa-magic col-red font-30 p-r-30"></i>
                                </div>
                                <canvas id="cardChart1" height="80"></canvas>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div class="col-xl-3 col-lg-6">
                    <Link to="/showCustomer">
                        <div class="card">
                            <div class="card-bg">
                                <div class="p-t-20 d-flex justify-content-between">
                                    <div class="col">
                                        <h4 class="mb-0">Customer</h4>
                                        <br />
                                        <h4><span>{customerList ? customerList.length : 0}</span></h4>
                                    </div>
                                    <i class="fas fa-female col-green font-40 p-r-40"></i>
                                </div>
                                <canvas id="cardChart1" height="80"></canvas>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div class="col-xl-3 col-lg-6">
                    <Link to="/showArea">
                        <div class="card">
                            <div class="card-bg">
                                <div class="p-t-20 d-flex justify-content-between">
                                    <div class="col">
                                        <h4 class="mb-0">Area</h4>
                                        <br />
                                        <h4><span>{areaList ? areaList.length : 0}</span></h4>
                                    </div>
                                    <i class="fas fa-map-marked-alt col-white font-30 p-r-30"></i>
                                </div>
                                <canvas id="cardChart1" height="80"></canvas>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div class="col-xl-3 col-lg-6">
                    <Link to="/showCity">
                        <div class="card">
                            <div class="card-bg">
                                <div class="p-t-20 d-flex justify-content-between">
                                    <div class="col">
                                        <h4 class="mb-0">City</h4>
                                        <br />
                                        <h4><span>{cityList ? cityList.length : 0}</span></h4>
                                    </div>
                                    <i class="fas fa-map-marker-alt col-red font-30 p-r-30"></i>
                                </div>
                                <canvas id="cardChart1" height="80"></canvas>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div class="col-xl-3 col-lg-6">
                    <Link to="/showEventBooking">
                        <div class="card">
                            <div class="card-bg">
                                <div class="p-t-20 d-flex justify-content-between">
                                    <div class="col">
                                        <h4 class="mb-0">EventBooking</h4>
                                        <br />
                                        <h4><span>{eventBooking ? eventBooking.length : 0}</span></h4>
                                    </div>
                                    <i class="fas fa-calendar-alt col-brown font-30 p-r-30"></i>
                                </div>
                                <canvas id="cardChart1" height="80"></canvas>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div class="col-xl-3 col-lg-6">
                    <Link to="/showEmployeeEvent">
                        <div class="card">
                            <div class="card-bg">
                                <div class="p-t-20 d-flex justify-content-between">
                                    <div class="col">
                                        <h4 class="mb-0">EventEmployee</h4>
                                        <br />
                                        <h4><span>{employeeEvent ? employeeEvent.length : 0}</span></h4>
                                    </div>
                                    <i class="fas fa-id-badge col-Crimson font-30 p-r-30"></i>
                                </div>
                                <canvas id="cardChart1" height="80"></canvas>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div class="col-xl-3 col-lg-6">
                    <Link to="#">
                        <div class="card">
                            <div class="card-bg">
                                <div class="p-t-20 d-flex justify-content-between">
                                    <div class="col">
                                        <h4 class="mb-0">Income</h4>
                                        <br />
                                        <h4><span>{totalIncome}</span></h4>
                                    </div>
                                    <i class="fas fa-rupee-sign col-Crimson font-30 p-r-30"></i>
                                </div>
                                <canvas id="cardChart1" height="80"></canvas>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>

            </section>

        </div>
        </>
          ) : sessionStorage.getItem("userType") == "Employee" ? (<>
          
        <div class="main-content">
            <section class="section">
                <div class="row ">
                    <div class="col-xl-3 col-lg-6">
                    <Link to="/showArea">
                        <div class="card">
                            <div class="card-bg">
                                <div class="p-t-20 d-flex justify-content-between">
                                    <div class="col">
                                        <h4 class="mb-0">Area</h4>
                                        <br />
                                        <h4><span>{areaList ? areaList.length : 0}</span></h4>
                                    </div>
                                    <i class="fas fa-map-marked-alt col-white font-30 p-r-30"></i>
                                </div>
                                <canvas id="cardChart1" height="80"></canvas>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div class="col-xl-3 col-lg-6">
                    <Link to="/showCity">
                        <div class="card">
                            <div class="card-bg">
                                <div class="p-t-20 d-flex justify-content-between">
                                    <div class="col">
                                        <h4 class="mb-0">City</h4>
                                        <br />
                                        <h4><span>{cityList ? cityList.length : 0}</span></h4>
                                    </div>
                                    <i class="fas fa-map-marker-alt col-red font-30 p-r-30"></i>
                                </div>
                                <canvas id="cardChart1" height="80"></canvas>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div class="col-xl-3 col-lg-6">
                    <Link to="/showEventBooking">
                        <div class="card">
                            <div class="card-bg">
                                <div class="p-t-20 d-flex justify-content-between">
                                    <div class="col">
                                        <h4 class="mb-0">EventBooking</h4>
                                        <br />
                                        <h4><span>{eventBooking ? eventBooking.length : 0}</span></h4>
                                    </div>
                                    <i class="fas fa-calendar-alt col-brown font-30 p-r-30"></i>
                                </div>
                                <canvas id="cardChart1" height="80"></canvas>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div class="col-xl-3 col-lg-6">
                    <Link to="/showEmployeeEvent">
                        <div class="card">
                            <div class="card-bg">
                                <div class="p-t-20 d-flex justify-content-between">
                                    <div class="col">
                                        <h4 class="mb-0">EventEmployee</h4>
                                        <br />
                                        <h4><span>{employeeEvent ? employeeEvent.length : 0}</span></h4>
                                    </div>
                                    <i class="fas fa-id-badge col-Crimson font-30 p-r-30"></i>
                                </div>
                                <canvas id="cardChart1" height="80"></canvas>
                            </div>
                        </div>
                        </Link>
                    </div>
                    
                </div>

            </section>

        </div>
        </>
          ) : sessionStorage.getItem("userType") == "Vendor" ? (<>
            
        <div class="main-content">
            <section class="section">
                <div class="row ">
                   
                    <div class="col-xl-3 col-lg-6">
                    <Link to="/showEventBooking">
                        <div class="card">
                            <div class="card-bg">
                                <div class="p-t-20 d-flex justify-content-between">
                                    <div class="col">
                                        <h4 class="mb-0">EventBooking</h4>
                                        <br />
                                        <h4><span>{eventBooking ? eventBooking.length : 0}</span></h4>
                                    </div>
                                    <i class="fas fa-calendar-alt col-brown font-30 p-r-30"></i>
                                </div>
                                <canvas id="cardChart1" height="80"></canvas>
                            </div>
                        </div>
                        </Link>
                    </div>
                    
                    <div class="col-xl-3 col-lg-6">
                    <Link to="#">
                        <div class="card">
                            <div class="card-bg">
                                <div class="p-t-20 d-flex justify-content-between">
                                    <div class="col">
                                        <h4 class="mb-0">Income</h4>
                                        <br />
                                        <h4><span>{totalIncome}</span></h4>
                                    </div>
                                    <i class="fas fa-rupee-sign col-Crimson font-30 p-r-30"></i>
                                </div>
                                <canvas id="cardChart1" height="80"></canvas>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>

            </section>

        </div>
        </>
          ):(<></>)}
        <Footer></Footer>
    </>);
}

export default Dashboard;