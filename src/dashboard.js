import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";

function Dashboard() {

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
                        <div class="card l-bg-green-dark">
                            <div class="card-statistic-3">
                                <div class="card-icon card-icon-large"><i class="fa fa-award"></i></div>
                                <div class="card-content">
                                    <h4 class="card-title">New Orders</h4>
                                    <span>524</span>
                                    <div class="progress mt-1 mb-1" data-height="8">
                                        <div class="progress-bar l-bg-purple" role="progressbar" data-width="25%" aria-valuenow="25"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mb-0 text-sm">
                                        <span class="mr-2"><i class="fa fa-arrow-up"></i> 10%</span>
                                        <span class="text-nowrap">Since last month</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6">
                        <div class="card l-bg-cyan-dark">
                            <div class="card-statistic-3">
                                <div class="card-icon card-icon-large"><i class="fa fa-briefcase"></i></div>
                                <div class="card-content">
                                    <h4 class="card-title">New Booking</h4>
                                    <span>1,258</span>
                                    <div class="progress mt-1 mb-1" data-height="8">
                                        <div class="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mb-0 text-sm">
                                        <span class="mr-2"><i class="fa fa-arrow-up"></i> 10%</span>
                                        <span class="text-nowrap">Since last month</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6">
                        <div class="card l-bg-purple-dark">
                            <div class="card-statistic-3">
                                <div class="card-icon card-icon-large"><i class="fa fa-globe"></i></div>
                                <div class="card-content">
                                    <h4 class="card-title">Inquiry</h4>
                                    <span>10,225</span>
                                    <div class="progress mt-1 mb-1" data-height="8">
                                        <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mb-0 text-sm">
                                        <span class="mr-2"><i class="fa fa-arrow-up"></i> 10%</span>
                                        <span class="text-nowrap">Since last month</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6">
                        <div class="card l-bg-orange-dark">
                            <div class="card-statistic-3">
                                <div class="card-icon card-icon-large"><i class="fa fa-money-bill-alt"></i></div>
                                <div class="card-content">
                                    <h4 class="card-title">Earning</h4>
                                    <span>$2,658</span>
                                    <div class="progress mt-1 mb-1" data-height="8">
                                        <div class="progress-bar l-bg-green" role="progressbar" data-width="25%" aria-valuenow="25"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mb-0 text-sm">
                                        <span class="mr-2"><i class="fa fa-arrow-up"></i> 10%</span>
                                        <span class="text-nowrap">Since last month</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-12 col-lg-6">
                        <div class="card">
                            <div class="card-header">
                                <h4>Revenue</h4>
                            </div>
                            <div class="card-body">
                                <div id="echart_graph_line" class="chartsh"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-lg-6">
                        <div class="card">
                            <div class="card-header">
                                <h4>Revenue</h4>
                            </div>
                            <div class="card-body">
                                <div class="summary">
                                    <div class="summary-chart active" data-tab-group="summary-tab" id="summary-chart">
                                        <div id="echart_area_line" class="chartsh"></div>
                                    </div>
                                    <div data-tab-group="summary-tab" id="summary-text">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header">
                                <h4>Quick Draft</h4>
                            </div>
                            <div class="card-body pb-0">
                                <div class="card-body sales-growth-chart">
                                    <div id="echart_bar" class="chartsh"></div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="chart-title mb-1 text-center">
                                    <h6>Total monthly Sales.</h6>
                                </div>
                                <div class="chart-stats text-center">
                                    <a href="#"><i data-feather="arrow-up-circle" class="col-green"></i></a>
                                    <span class="text-muted">20% high since the last year.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-header">
                                <h4>Recent Orders</h4>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-striped">
                                        <tr>
                                            <th style={{ width: "35%" }}>Cust Name</th>
                                            <th style={{ width: "35%" }}>Order No</th>
                                            <th style={{ width: "35%" }}>Status</th>
                                            <th>Amount</th>
                                            <th>Details</th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="media">
                                                    <img alt="image" class="mr-3 rounded-circle" width="40" src="assets/img/users/user-1.png" />
                                                    <div class="media-body">
                                                        <div class="media-title">Cara Stevens</div>
                                                        <div class="text-job text-muted">Prime Customer</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>CT56743</td>
                                            <td class="align-middle">
                                                <div class="progress-text">30%</div>
                                                <div class="progress" data-height="6">
                                                    <div class="progress-bar bg-orange" data-width="30%"></div>
                                                </div>
                                            </td>
                                            <td>$955</td>
                                            <td>
                                                <div class="media-cta">
                                                    <a href="#" class="btn btn-outline-primary">Detail</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="media">
                                                    <img alt="image" class="mr-3 rounded-circle" width="40" src="assets/img/users/user-2.png" />
                                                    <div class="media-body">
                                                        <div class="media-title">John Doe</div>
                                                        <div class="text-job text-muted">Regular Customer</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>OT58743</td>
                                            <td class="align-middle">
                                                <div class="progress-text">50%</div>
                                                <div class="progress" data-height="6">
                                                    <div class="progress-bar bg-indigo" data-width="50%"></div>
                                                </div>
                                            </td>
                                            <td>$234</td>
                                            <td>
                                                <div class="media-cta">
                                                    <a href="#" class="btn btn-outline-primary">Detail</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="media">
                                                    <img alt="image" class="mr-3 rounded-circle" width="40" src="assets/img/users/user-3.png" />
                                                    <div class="media-body">
                                                        <div class="media-title">Sarah Smith</div>
                                                        <div class="text-job text-muted">Prime Customer</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>KJ76543</td>
                                            <td class="align-middle">
                                                <div class="progress-text">43%</div>
                                                <div class="progress" data-height="6">
                                                    <div class="progress-bar bg-purple" data-width="43%"></div>
                                                </div>
                                            </td>
                                            <td>$2,432</td>
                                            <td>
                                                <div class="media-cta">
                                                    <a href="#" class="btn btn-outline-primary">Detail</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="media">
                                                    <img alt="image" class="mr-3 rounded-circle" width="40" src="assets/img/users/user-4.png" />
                                                    <div class="media-body">
                                                        <div class="media-title">Ashton Cox
                                                        </div>
                                                        <div class="text-job text-muted">Prime Customer</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>FD56743</td>
                                            <td class="align-middle">
                                                <div class="progress-text">65%</div>
                                                <div class="progress" data-height="6">
                                                    <div class="progress-bar bg-cyan" data-width="65%"></div>
                                                </div>
                                            </td>
                                            <td>$234</td>
                                            <td>
                                                <div class="media-cta">
                                                    <a href="#" class="btn btn-outline-primary">Detail</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="media">
                                                    <img alt="image" class="mr-3 rounded-circle" width="40" src="assets/img/users/user-5.png" />
                                                    <div class="media-body">
                                                        <div class="media-title">Hasan Basri</div>
                                                        <div class="text-job text-muted">Regular Customer</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>XU56743</td>
                                            <td class="align-middle">
                                                <div class="progress-text">39%</div>
                                                <div class="progress" data-height="6">
                                                    <div class="progress-bar bg-danger" data-width="39%"></div>
                                                </div>
                                            </td>
                                            <td>$747</td>
                                            <td>
                                                <div class="media-cta">
                                                    <a href="#" class="btn btn-outline-primary">Detail</a>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-12 col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <h4>Project Details</h4>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive table-invoice">
                                    <table class="table table-striped">
                                        <tr>
                                            <th class="text-center">#</th>
                                            <th>Project Name</th>
                                            <th>Customer</th>
                                            <th>Team</th>
                                            <th>Progress</th>
                                            <th>Start Date</th>
                                            <th>Delivery Date</th>
                                            <th>Action</th>
                                        </tr>
                                        <tr>
                                            <td class="p-0 text-center">
                                                <div class="custom-checkbox custom-control">
                                                    <input type="checkbox" data-checkboxes="mygroup" class="custom-control-input"
                                                        id="checkbox-1" /> <label for="checkbox-1" class="custom-control-label">&nbsp;</label>
                                                </div>
                                            </td>
                                            <td><a href="#">Ecommerce website</a></td>
                                            <td class="font-weight-600">Sarah Smith</td>
                                            <td class="text-truncate">
                                                <ul class="list-unstyled order-list m-b-0 m-b-0">
                                                    <li class="team-member team-member-sm"><img class="rounded-circle"
                                                        src="assets/img/users/user-8.png" alt="user" data-toggle="tooltip" title=""
                                                        data-original-title="Wildan Ahdian" /></li>
                                                    <li class="team-member team-member-sm"><img class="rounded-circle"
                                                        src="assets/img/users/user-9.png" alt="user" data-toggle="tooltip" title=""
                                                        data-original-title="John Deo" /></li>
                                                    <li class="team-member team-member-sm"><img class="rounded-circle"
                                                        src="assets/img/users/user-10.png" alt="user" data-toggle="tooltip" title=""
                                                        data-original-title="Sarah Smith" /></li>
                                                    <li class="avatar avatar-sm"><span class="badge badge-primary">+4</span></li>
                                                </ul>
                                            </td>
                                            <td class="align-middle">
                                                <div class="progress" data-height="4" data-toggle="tooltip" title="30%">
                                                    <div class="progress-bar bg-orange" data-width="30"></div>
                                                </div>
                                            </td>
                                            <td>July 19, 2018</td>
                                            <td>March 25, 2019</td>
                                            <td><a class="btn btn-action bg-purple mr-1" data-toggle="tooltip" title="Edit"><i
                                                class="fas fa-pencil-alt"></i></a> <a class="btn btn-danger btn-action"
                                                    data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you
															want to continue?" data-confirm-yes="alert('Deleted')"><i class="fas fa-trash"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td class="p-0 text-center">
                                                <div class="custom-checkbox custom-control">
                                                    <input type="checkbox" data-checkboxes="mygroup" class="custom-control-input"
                                                        id="checkbox-2" /> <label for="checkbox-2" class="custom-control-label">&nbsp;</label>
                                                </div>
                                            </td>
                                            <td><a href="#">Android App</a></td>
                                            <td class="font-weight-600">Airi Satou</td>
                                            <td class="text-truncate">
                                                <ul class="list-unstyled order-list m-b-0 m-b-0">
                                                    <li class="team-member team-member-sm"><img class="rounded-circle"
                                                        src="assets/img/users/user-3.png" alt="user" data-toggle="tooltip" title=""
                                                        data-original-title="Wildan Ahdian" /></li>
                                                    <li class="team-member team-member-sm"><img class="rounded-circle"
                                                        src="assets/img/users/user-7.png" alt="user" data-toggle="tooltip" title=""
                                                        data-original-title="Sarah Smith" /></li>
                                                    <li class="avatar avatar-sm"><span class="badge badge-primary">+2</span></li>
                                                </ul>
                                            </td>
                                            <td class="align-middle">
                                                <div class="progress" data-height="4" data-toggle="tooltip" title="55%">
                                                    <div class="progress-bar bg-purple" data-width="55"></div>
                                                </div>
                                            </td>
                                            <td>March 21, 2015</td>
                                            <td>July 22, 2017</td>
                                            <td><a class="btn btn-action bg-purple mr-1" data-toggle="tooltip" title="Edit"><i
                                                class="fas fa-pencil-alt"></i></a> <a class="btn btn-danger btn-action"
                                                    data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you
															want to continue?" data-confirm-yes="alert('Deleted')"><i class="fas fa-trash"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td class="p-0 text-center">
                                                <div class="custom-checkbox custom-control">
                                                    <input type="checkbox" data-checkboxes="mygroup" class="custom-control-input"
                                                        id="checkbox-3" /> <label for="checkbox-3" class="custom-control-label">&nbsp;</label>
                                                </div>
                                            </td>
                                            <td><a href="#">Logo Design</a></td>
                                            <td class="font-weight-600">Ashton Cox</td>
                                            <td class="text-truncate">
                                                <ul class="list-unstyled order-list m-b-0 m-b-0">
                                                    <li class="team-member team-member-sm"><img class="rounded-circle"
                                                        src="assets/img/users/user-1.png" alt="user" data-toggle="tooltip" title=""
                                                        data-original-title="Wildan Ahdian" /></li>
                                                    <li class="team-member team-member-sm"><img class="rounded-circle"
                                                        src="assets/img/users/user-5.png" alt="user" data-toggle="tooltip" title=""
                                                        data-original-title="John Deo" /></li>
                                                    <li class="team-member team-member-sm"><img class="rounded-circle"
                                                        src="assets/img/users/user-9.png" alt="user" data-toggle="tooltip" title=""
                                                        data-original-title="Sarah Smith" /></li>
                                                    <li class="avatar avatar-sm"><span class="badge badge-primary">+5</span></li>
                                                </ul>
                                            </td>
                                            <td class="align-middle">
                                                <div class="progress" data-height="4" data-toggle="tooltip" title="55%">
                                                    <div class="progress-bar bg-green" data-width="55"></div>
                                                </div>
                                            </td>
                                            <td>Feb 02, 2018</td>
                                            <td>March 12, 2019</td>
                                            <td><a class="btn btn-action bg-purple mr-1" data-toggle="tooltip" title="Edit"><i
                                                class="fas fa-pencil-alt"></i></a> <a class="btn btn-danger btn-action"
                                                    data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you
															want to continue?" data-confirm-yes="alert('Deleted')"><i class="fas fa-trash"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td class="p-0 text-center">
                                                <div class="custom-checkbox custom-control">
                                                    <input type="checkbox" data-checkboxes="mygroup" class="custom-control-input"
                                                        id="checkbox-4" /> <label for="checkbox-4" class="custom-control-label">&nbsp;</label>
                                                </div>
                                            </td>
                                            <td><a href="#">Java Project</a></td>
                                            <td class="font-weight-600">Cara Stevens</td>
                                            <td class="text-truncate">
                                                <ul class="list-unstyled order-list m-b-0">
                                                    <li class="team-member team-member-sm"><img class="rounded-circle"
                                                        src="assets/img/users/user-4.png" alt="user" data-toggle="tooltip" title=""
                                                        data-original-title="Wildan Ahdian" /></li>
                                                    <li class="team-member team-member-sm"><img class="rounded-circle"
                                                        src="assets/img/users/user-7.png" alt="user" data-toggle="tooltip" title=""
                                                        data-original-title="John Deo" /></li>
                                                    <li class="team-member team-member-sm"><img class="rounded-circle"
                                                        src="assets/img/users/user-10.png" alt="user" data-toggle="tooltip" title=""
                                                        data-original-title="John Deo" /></li>
                                                    <li class="team-member team-member-sm"><img class="rounded-circle"
                                                        src="assets/img/users/user-2.png" alt="user" data-toggle="tooltip" title=""
                                                        data-original-title="Sarah Smith" /></li>
                                                    <li class="avatar avatar-sm"><span class="badge badge-primary">+1</span></li>
                                                </ul>
                                            </td>
                                            <td class="align-middle">
                                                <div class="progress" data-height="4" data-toggle="tooltip" title="30%">
                                                    <div class="progress-bar bg-orange" data-width="30"></div>
                                                </div>
                                            </td>
                                            <td>July 19, 2018</td>
                                            <td>March 25, 2019</td>
                                            <td><a class="btn btn-action bg-purple mr-1" data-toggle="tooltip" title="Edit"><i
                                                class="fas fa-pencil-alt"></i></a> <a class="btn btn-danger btn-action"
                                                    data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you
															want to continue?" data-confirm-yes="alert('Deleted')"><i class="fas fa-trash"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td class="p-0 text-center">
                                                <div class="custom-checkbox custom-control">
                                                    <input type="checkbox" data-checkboxes="mygroup" class="custom-control-input"
                                                        id="checkbox-5" /> <label for="checkbox-5" class="custom-control-label">&nbsp;</label>
                                                </div>
                                            </td>
                                            <td><a href="#">Ecommerce website</a></td>
                                            <td class="font-weight-600">John Doe</td>
                                            <td class="text-truncate">
                                                <ul class="list-unstyled order-list m-b-0">
                                                    <li class="team-member team-member-sm"><img class="rounded-circle"
                                                        src="assets/img/users/user-8.png" alt="user" data-toggle="tooltip" title=""
                                                        data-original-title="Wildan Ahdian" /></li>
                                                    <li class="team-member team-member-sm"><img class="rounded-circle"
                                                        src="assets/img/users/user-4.png" alt="user" data-toggle="tooltip" title=""
                                                        data-original-title="John Deo" /></li>
                                                    <li class="team-member team-member-sm"><img class="rounded-circle"
                                                        src="assets/img/users/user-3.png" alt="user" data-toggle="tooltip" title=""
                                                        data-original-title="Sarah Smith" /></li>
                                                    <li class="avatar avatar-sm"><span class="badge badge-primary">+2</span></li>
                                                </ul>
                                            </td>
                                            <td class="align-middle">
                                                <div class="progress" data-height="4" data-toggle="tooltip" title="80%">
                                                    <div class="progress-bar bg-green" data-width="80"></div>
                                                </div>
                                            </td>
                                            <td>May 11, 2017</td>
                                            <td>March 15, 2018</td>
                                            <td><a class="btn btn-action bg-purple mr-1" data-toggle="tooltip" title="Edit"><i
                                                class="fas fa-pencil-alt"></i></a> <a class="btn btn-danger btn-action"
                                                    data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you
															want to continue?" data-confirm-yes="alert('Deleted')"><i class="fas fa-trash"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td class="p-0 text-center">
                                                <div class="custom-checkbox custom-control">
                                                    <input type="checkbox" data-checkboxes="mygroup" class="custom-control-input"
                                                        id="checkbox-6" /> <label for="checkbox-6" class="custom-control-label">&nbsp;</label>
                                                </div>
                                            </td>
                                            <td><a href="#">Android App</a></td>
                                            <td class="font-weight-600">Angelica Ramos</td>
                                            <td class="text-truncate">
                                                <ul class="list-unstyled order-list m-b-0">
                                                    <li class="team-member team-member-sm"><img class="rounded-circle"
                                                        src="assets/img/users/user-3.png" alt="user" data-toggle="tooltip" title=""
                                                        data-original-title="Wildan Ahdian" /></li>
                                                    <li class="team-member team-member-sm"><img class="rounded-circle"
                                                        src="assets/img/users/user-1.png" alt="user" data-toggle="tooltip" title=""
                                                        data-original-title="Sarah Smith" /></li>
                                                    <li class="avatar avatar-sm"><span class="badge badge-primary">+2</span></li>
                                                </ul>
                                            </td>
                                            <td class="align-middle">
                                                <div class="progress" data-height="4" data-toggle="tooltip" title="56%">
                                                    <div class="progress-bar bg-purple" data-width="56"></div>
                                                </div>
                                            </td>
                                            <td>June 02, 2018</td>
                                            <td>April 05, 2019</td>
                                            <td><a class="btn btn-action bg-purple mr-1" data-toggle="tooltip" title="Edit"><i
                                                class="fas fa-pencil-alt"></i></a> <a class="btn btn-danger btn-action"
                                                    data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you
															want to continue?" data-confirm-yes="alert('Deleted')"><i class="fas fa-trash"></i></a></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-12 col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="chart-title">
                                    <p class="mb-3 text-muted pull-left text-sm">
                                        <span class="text-success mr-2 font-20"><i class="fa fa-arrow-up"></i>
                                            10%</span> <span class="text-nowrap">Since
                                                last month</span>
                                    </p>
                                </div>
                                <canvas id="chart-1"></canvas>
                                <div class="row text-center">
                                    <div class="col-4 m-t-15">
                                        <h5>91%</h5>
                                        <p class="text-muted m-b-0">Online</p>
                                    </div>
                                    <div class="col-4 m-t-15">
                                        <h5>8%</h5>
                                        <p class="text-muted m-b-0">Offline</p>
                                    </div>
                                    <div class="col-4 m-t-15">
                                        <h5>1%</h5>
                                        <p class="text-muted m-b-0">NA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-12 col-12 col-sm-12">
                        <div class="card">
                            <div class="card-header">
                                <h4>Latest Transactions</h4>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table dataTable table-striped">
                                        <tr>
                                            <th>#</th>
                                            <th>Order No</th>
                                            <th>Cust Name</th>
                                            <th>Status</th>
                                            <th>Amount</th>
                                            <th>Edit</th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img alt="image" src="assets/img/users/user-8.png" width="35" />
                                            </td>
                                            <td>XY56987</td>
                                            <td>John Deo</td>
                                            <td><i class="fas fa-circle col-green m-r-5"></i>Confirm</td>
                                            <td>$955</td>
                                            <td>
                                                <a data-toggle="tooltip" title="Edit"><i class="fas fa-pencil-alt"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img alt="image" src="assets/img/users/user-4.png" width="35" />
                                            </td>
                                            <td>XY12587</td>
                                            <td>Sarah Smith</td>
                                            <td><i class="fas fa-circle col-orange m-r-5"></i>Payment Failed</td>
                                            <td>$215</td>
                                            <td>
                                                <a data-toggle="tooltip" title="Edit"><i class="fas fa-pencil-alt"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img alt="image" src="assets/img/users/user-7.png" width="35" />
                                            </td>
                                            <td>XY58987</td>
                                            <td>John Doe</td>
                                            <td><i class="fas fa-circle col-green m-r-5"></i>Confirm</td>
                                            <td>$125</td>
                                            <td>
                                                <a data-toggle="tooltip" title="Edit"><i class="fas fa-pencil-alt"></i></a>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="settingSidebar">
                <a href="javascript:void(0)" class="settingPanelToggle"> <i class="fa fa-spin fa-cog"></i>
                </a>
                <div class="settingSidebar-body ps-container ps-theme-default">
                    <div class=" fade show active">
                        <div class="setting-panel-header">Setting Panel
                        </div>
                        <div class="p-15 border-bottom">
                            <h6 class="font-medium m-b-10">Select Layout</h6>
                            <div class="selectgroup layout-color w-50">
                                <label class="selectgroup-item">
                                    <input type="radio" name="value" value="1" class="selectgroup-input select-layout" checked />
                                    <span class="selectgroup-button">Light</span>
                                </label>
                                <label class="selectgroup-item">
                                    <input type="radio" name="value" value="2" class="selectgroup-input select-layout" />
                                    <span class="selectgroup-button">Dark</span>
                                </label>
                            </div>
                        </div>
                        <div class="p-15 border-bottom">
                            <h6 class="font-medium m-b-10">Sidebar Color</h6>
                            <div class="selectgroup selectgroup-pills sidebar-color">
                                <label class="selectgroup-item">
                                    <input type="radio" name="icon-input" value="1" class="selectgroup-input select-sidebar" />
                                    <span class="selectgroup-button selectgroup-button-icon" data-toggle="tooltip"
                                        data-original-title="Light Sidebar"><i class="fas fa-sun"></i></span>
                                </label>
                                <label class="selectgroup-item">
                                    <input type="radio" name="icon-input" value="2" class="selectgroup-input select-sidebar" checked />
                                    <span class="selectgroup-button selectgroup-button-icon" data-toggle="tooltip"
                                        data-original-title="Dark Sidebar"><i class="fas fa-moon"></i></span>
                                </label>
                            </div>
                        </div>
                        <div class="p-15 border-bottom">
                            <h6 class="font-medium m-b-10">Color Theme</h6>
                            <div class="theme-setting-options">
                                <ul class="choose-theme list-unstyled mb-0">
                                    <li title="white" class="active">
                                        <div class="white"></div>
                                    </li>
                                    <li title="cyan">
                                        <div class="cyan"></div>
                                    </li>
                                    <li title="black">
                                        <div class="black"></div>
                                    </li>
                                    <li title="purple">
                                        <div class="purple"></div>
                                    </li>
                                    <li title="orange">
                                        <div class="orange"></div>
                                    </li>
                                    <li title="green">
                                        <div class="green"></div>
                                    </li>
                                    <li title="red">
                                        <div class="red"></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="p-15 border-bottom">
                            <div class="theme-setting-options">
                                <label>
                                    <span class="control-label p-r-20">Mini Sidebar</span>
                                    <input type="checkbox" name="custom-switch-checkbox" class="custom-switch-input"
                                        id="mini_sidebar_setting" />
                                    <span class="custom-switch-indicator"></span>
                                </label>
                            </div>
                        </div>
                        <div class="p-15 border-bottom">
                            <div class="theme-setting-options">
                                <div class="disk-server-setting m-b-20">
                                    <p>Disk Space</p>
                                    <div class="sidebar-progress">
                                        <div class="progress" data-height="5">
                                            <div class="progress-bar l-bg-green" role="progressbar" data-width="80%" aria-valuenow="80"
                                                aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span class="progress-description">
                                            <small>26% remaining</small>
                                        </span>
                                    </div>
                                </div>
                                <div class="disk-server-setting">
                                    <p>Server Load</p>
                                    <div class="sidebar-progress">
                                        <div class="progress" data-height="5">
                                            <div class="progress-bar l-bg-orange" role="progressbar" data-width="58%" aria-valuenow="25"
                                                aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span class="progress-description">
                                            <small>Highly Loaded</small>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 mb-4 p-3 align-center rt-sidebar-last-ele">
                            <a href="#" class="btn btn-icon icon-left btn-primary btn-restore-theme">
                                <i class="fas fa-undo"></i> Restore Default
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </>);
}

export default Dashboard;