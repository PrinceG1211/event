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
    useEffect(() => {
        fetchVendor()
        fetchEmployee()
        fetchEventDetailList()
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
                    </div>
                    <div class="col-xl-3 col-lg-6">
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
                    </div>
                </div>

            </section>

        </div>
        <Footer></Footer>
    </>);
}

export default Dashboard;