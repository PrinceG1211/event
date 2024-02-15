import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";
import { useEffect, useState } from "react";
import { Variables } from "./utils/Variables";
import { Link } from "react-router-dom";

function ShowEventBooking() {
  useScript('/assets/bundles/echart/echarts.js');
  const [eventBookinkgList, setEventBooking] = useState([]);
  useEffect(() => {

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
      })
  }, []);

  const handleDelete = (id) => {
    fetch(Variables.apiURL + "EventBooking/delete", {
      method: "POST",
      headers: {
        accept: "Application/json",
        "content-type": "Application/json",
      },
      body: JSON.stringify({
        eventBookingID: id
      })
    }).then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setEventBooking( eventBookinkgList.filter((item) => item.id !== id))
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
                  <h4>EventBooking Data</h4>
                  <Link to="/addEventBooking" className="btn btn-outline-primary">Add</Link>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-striped table-hover" id="tableExport" style={{ width: "100%" }}>
                      <thead>
                        <tr>
                          <th>bookingType</th>
                          <th>customerID</th>
                          <th>eventID</th>
                          <th>packageID</th>
                          <th>bookingDate</th>
                          <th>bookingStartDate</th>
                          <th>bookingEndDate</th>
                          <th>bookingStatus</th>
                          <th>venue</th>
                          <th>noOfGuest</th>
                          <th>subTotal</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          eventBookinkgList.map((eventBookinkg, index) => (
                            <tr>
                              <td>{index + 1}</td>
                              <td>{eventBookinkg.bookingType}</td>  
                              <td>{eventBookinkg.customerID}</td>
                              <td>{eventBookinkg.eventID}</td>
                              <td>{eventBookinkg.packageID}</td>
                              <td>{eventBookinkg.bookingDate}</td>
                              <td>{eventBookinkg.bookingStartDate}</td>
                              <td>{eventBookinkg.bookingEndDate}</td>
                              <td>{eventBookinkg.bookingStatus}</td>
                              <td>{eventBookinkg.venue}</td>
                              <td>{eventBookinkg.noOfGuest}</td>
                              <td>{eventBookinkg.subTotal}</td>
                              <td>
                                <Link className="btn btn-icon icon-left btn-outline-info" to={`/editEventBookinkg/${eventBookinkg.eventBookinkgID}`}><i className="far fa-edit"></i>Edit</Link><br/><br/>
                                <button className="btn btn-icon icon-left btn-outline-danger" onClick={() => handleDelete(eventBookinkg.eventBookinkgID)}><i className="fas fa-times"></i>Delete</button>
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

export default ShowEventBooking;