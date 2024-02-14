import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";
import { Link } from "react-router-dom";

function ShowCustomer() {
  useScript('/assets/bundles/echart/echarts.js');
    return (<>
        <Header></Header>
        <div class="main-content">
      <section class="section">
        <div class="section-body">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h4>Customer Data</h4>
                  <Link to="/addCustomer" className="btn btn-outline-primary">Add</Link>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-striped table-hover" id="tableExport" style={{ width: "100%" }}>
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>name</th>
                          <th>email</th>
                          <th>mobileNo</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          customerList.map((customer, index) => (
                            <tr>
                              <td>{index + 1}</td>
                              <td>{customer.CustomerName}</td>
                              <td>{customer.CustomerEmail}</td>
                              <td>{customer.MobileNO}</td>
                              <td>
                                <Link className="btn btn-icon icon-left btn-outline-info" to={`/editCustomer/${customer.customerID}`}><i className="far fa-edit"></i>Edit</Link><br/><br/>
                                <button className="btn btn-icon icon-left btn-outline-danger" onClick={() => handleDelete(customer.customerID)}><i className="fas fa-times"></i>Delete</button>
                              </td>
                            </tr>
                          ))
                        }

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
       <Footer></Footer>
    </>);
}

export default ShowCustomer;