import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";
import { useEffect, useState } from "react";
import { Variables } from "./utils/Variables";
import { Link } from "react-router-dom";

function Dashboard() {

    const [VendorList, setVendorList] = useState([]);
    const [EmployeeList, setEmployeeList] = useState([]);
    const [eventDetailList, setEventDetailList] = useState([]);
    const [customerList, setCustomerList] = useState([]);
    const [areaList, setAreaList] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [eventBooking, setEventBooking] = useState([]);
    const [employeeEvent, setEmployeeEvent] = useState([]);
    useEffect(() => {
        fetchVendor()
        fetchEmployee()
        fetchEventDetailList()
        fetchCustomerList()
        fetchArea()
        fetchCity()
        fetchEventBooking()
        fetchEmployeeEvent()

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
                setVendorList(data.data);
            }, (error) => {
                console.log(error);
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
                setEmployeeList(data.data);
            }, (error) => {
                console.log(error);
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
                setEventDetailList(data.data);
            }, (error) => {
                console.log(error);
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
                setCustomerList(data.data);
            }, (error) => {
                console.log(error);
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
                setAreaList(data.data);
            }, (error) => {
                console.log(error);
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
                setCityList(data.data);
            }, (error) => {
                console.log(error);
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
                setEventBooking(data.data);
            }, (error) => {
                console.log(error);
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
                setEmployeeEvent(data.data);
            }, (error) => {
                console.log(error);
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
                                        <h4><span>{VendorList.length}</span></h4>
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
                                        <h4><span>{EmployeeList.length}</span></h4>
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
                                        <h4><span>{eventDetailList.length}</span></h4>
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
                                        <h4><span>{customerList.length}</span></h4>
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
                                        <h4><span>{areaList.length}</span></h4>
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
                                        <h4><span>{cityList.length}</span></h4>
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
                                        <h4><span>{eventBooking.length}</span></h4>
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
                                        <h4><span>{employeeEvent.length}</span></h4>
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
        <Footer></Footer>
    </>);
}

export default Dashboard;