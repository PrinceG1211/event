import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";
import { Link } from "react-router-dom";

function ShowCity() {
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
                  <h4>City Data</h4>
                  <Link to="/addCity" className="btn btn-outline-primary">Add</Link>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-striped table-hover" id="tableExport" style={{ width: "100%" }}>
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>CityName</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          cityList.map((city, index) => (
                            <tr>
                              <td>{index + 1}</td>
                              <td>{city.cityName}</td>
                              <td>
                                <Link className="btn btn-icon icon-left btn-outline-info" to={`/editCity/${city.cityID}`}><i className="far fa-edit"></i>Edit</Link><br/><br/>
                                <button className="btn btn-icon icon-left btn-outline-danger" onClick={() => handleDelete(city.cityID)}><i className="fas fa-times"></i>Delete</button>
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

export default ShowCity;