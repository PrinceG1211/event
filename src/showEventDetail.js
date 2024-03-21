import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";
import { useEffect, useState } from "react";
import { Variables } from "./utils/Variables";
import { Link, useParams } from "react-router-dom";

function ShowEventDetail() {
  const {id} = useParams();
  const {type} = useParams();
  const [eventDetailList, setEventDetailList] = useState([]);
  useEffect(() => {
    var url = Variables.apiURL + "EventDetail/getbyevent/" +id;
    if(sessionStorage.getItem("userType") === "Vendor"){
      url = Variables.apiURL + "EventDetail/getbyeventVendor/"+id+"/"+sessionStorage.getItem("userID"); 
    }
    if(sessionStorage.getItem("userType") === "Venue"){
      url = Variables.apiURL + "EventDetail/getbyeventVenue/"+id+"/"+sessionStorage.getItem("userID"); 
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
        setEventDetailList(data.data);
      }, (error) => {
        console.log(error);
        alert("Failed");
      })
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    fetch(Variables.apiURL + "EventDetail/delete", {
      method: "POST",
      headers: {
        accept: "Application/json",
        "content-type": "Application/json",
      },
      body: JSON.stringify({
        eventDetailID: id
      })
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          setEventDetailList(eventDetailList.filter((item) => item.id !== id))
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
                  <h4>EventDetail Data</h4>
                  <Link to="/addEventDetail" className="btn btn-outline-primary">Add</Link>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-striped table-hover" id="tableExport" style={{ width: "100%" }}>
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>EventID</th>
                          <th>VendorID</th>
                          <th>date</th>
                          <th>cost</th>
                          <th>details</th>
                          <th>status</th>
                          <th>Edit</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          eventDetailList.map((eventDetail, index) => (
                            <tr>
                              <td>{index + 1}</td>
                              <td>{eventDetail.businessName}</td>  
                              <td>{eventDetail.vendorName}</td>
                              <td>{eventDetail.date}</td>
                              <td>{eventDetail.cost}</td>
                              <td>{eventDetail.details}</td>
                              <td>{eventDetail.status}</td>
                              <td>
                                <Link className="btn btn-icon icon-left btn-outline-info" to={`/editEventDetail/${eventDetail.eventDetailID}/${type}`}><i className="far fa-edit"></i>Edit</Link>
                              </td>
                              <td>
                                <button className="btn btn-icon icon-left btn-outline-danger" onClick={() => handleDelete(eventDetail.eventDetailID)}><i className="fas fa-times"></i>Delete</button>
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
export default ShowEventDetail;