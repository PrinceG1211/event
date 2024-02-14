import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";

function ShowEmployee() {
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
                  <h4>Employee Data</h4>
                  <Link to="/addEmployee" className="btn btn-outline-primary">Add</Link>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-striped table-hover" id="tableExport" style={{ width: "100%" }}>
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>MobileNo</th>
                          <th>dob</th>
                          <th>doj</th>
                          <th>type</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          EmployeeList.map((Employee, index) => (
                            <tr>
                              <td>{index + 1}</td>
                              <td>{Employee.EmployeeName}</td>
                              <td>{Employee.EmployeeEmail}</td>
                              <td>{Employee.EmployeeMobileNO}</td>
                              <td>{Employee.Employeedob}</td>
                              <td>{Employee.Employeedoj}</td>
                              <td>{Employee.Employeetype}</td>
                              <td>
                                <Link className="btn btn-icon icon-left btn-outline-info" to={`/editEmployee/${Employee.EmployeeID}`}><i className="far fa-edit"></i>Edit</Link><br/><br/>
                                <button className="btn btn-icon icon-left btn-outline-danger" onClick={() => handleDelete(Employee.EmployeeID)}><i className="fas fa-times"></i>Delete</button>
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

export default ShowEmployee;