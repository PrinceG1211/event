import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";
import { useEffect, useState } from "react";
import { Variables } from "./utils/Variables";
import { Link } from "react-router-dom";

function ShowVenue() {
  useScript('/assets/bundles/echart/echarts.js');
  const [VenueList, setVenueList] = useState([]);
  useEffect(() => {

    fetch(Variables.apiURL + "Venue", {
      method: "GET",
      headers: {
        accept: "Application/json",
        "content-type": "Application/json",
        // "Authorization": "Bearer " + token
      }
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVenueList(data.data);
      }, (error) => {
        console.log(error);
        alert("Failed");
      })
  }, []);

  const handleDelete = (id) => {
    fetch(Variables.apiURL + "Venue/delete", {
      method: "POST",
      headers: {
        accept: "Application/json",
        "content-type": "Application/json",
      },
      body: JSON.stringify({
        VenueID: id
      })
    }).then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setVenueList( VenueList.filter((item) => item.id !== id))
        } else {
          alert(data.message);
        }
      }, (error) => {
        console.log(error);
        alert("Failed");
      })
  }

  useScript("assets/bundles/datatables/datatables.min.js");
  useScript("assets/bundles/datatables/DataTables-1.10.16/js/dataTables.bootstrap4.min.js");
  useScript("assets/bundles/datatables/export-tables/dataTables.buttons.min.js");
  useScript("assets/bundles/datatables/export-tables/buttons.flash.min.js");
  useScript("assets/bundles/datatables/export-tables/jszip.min.js");
  useScript("assets/bundles/datatables/export-tables/pdfmake.min.js");
  useScript("assets/bundles/datatables/export-tables/vfs_fonts.js");
  useScript("assets/bundles/datatables/export-tables/buttons.print.min.js");
  useScript("assets/js/page/datatables.js");
  useScript("assets/js/scripts.js");
  useScript("assets/js/custom.js");
    return (<>
         <Header></Header>
        <div class="main-content">
      <section class="section">
        <div class="section-body">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h4>Venue Data</h4>
                  <Link to="/addVenue" className="btn btn-outline-primary">Add</Link>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-striped table-hover" id="tableExport" style={{ width: "100%" }}>
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>venueName</th>
                          <th>capacity</th>
                          <th>contactPerson</th>
                          <th>email</th>
                          <th>mobileNo</th>
                          <th>address</th>
                          <th>image</th>
                          <th>price</th>
                          <th>city</th>
                          <th>area</th>
                          <th>packageID</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                       VenueList.map((Venue, index) => (
                            <tr>
                              <td>{index + 1}</td>
                              <td>{Venue.venueName}</td>  
                              <td>{Venue.capacity}</td>
                              <td>{Venue.contactPerson}</td>
                              <td>{Venue.email}</td>  
                              <td>{Venue.mobileNo}</td>
                              <td>{Venue.address}</td>
                              <td>{Venue.image}</td>  
                              <td>{Venue.price}</td>
                              <td>{Venue.city}</td>
                              <td>{Venue.area}</td>  
                              <td>{Venue.packageName}</td>
                              <td>
                                <Link className="btn btn-icon icon-left btn-outline-info" to={`/editVenue/${Venue.venueID}`}><i className="far fa-edit"></i>Edit</Link><br/><br/>
                                <button className="btn btn-icon icon-left btn-outline-danger" onClick={() => handleDelete(Venue.venueID)}><i className="fas fa-times"></i>Delete</button>
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

export default ShowVenue;