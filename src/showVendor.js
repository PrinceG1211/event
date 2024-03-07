import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";
import { useEffect, useState } from "react";
import { Variables } from "./utils/Variables";
import { Link } from "react-router-dom";

function ShowVendor() {
  useScript('/assets/bundles/echart/echarts.js');
  const [VendorList, setVendorList] = useState([]);
  useEffect(() => {

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
      })
  }, []);

  const handleDelete = (id) => {
    fetch(Variables.apiURL + "Vendor/delete", {
      method: "POST",
      headers: {
        accept: "Application/json",
        "content-type": "Application/json",
      },
      body: JSON.stringify({
        VendorID: id
      })
    }).then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setVendorList( VendorList.filter((item) => item.id !== id))
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
                  <h4>Vendor Data</h4>
                  <Link to="/addVendor" className="btn btn-outline-primary">Add</Link>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-striped table-hover" id="tableExport" style={{ width: "100%" }}>
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>BName</th>
                          <th>VendorName</th>
                          <th>contactPerson</th>
                          <th>email</th>
                          <th>contactNo</th>
                          <th>address</th>
                          <th>category</th>
                          <th>packageID</th>
                          <th>price</th>
                          <th>image</th>
                          <th>Edit</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                       VendorList.map((Vendor, index) => (
                            <tr>
                              <td>{index + 1}</td>
                              <td>{Vendor.bname}</td>
                              <td>{Vendor.vendorName}</td>  
                              <td>{Vendor.contactPerson}</td>
                              <td>{Vendor.email}</td>  
                              <td>{Vendor.contactNo}</td>
                              <td>{Vendor.address}</td>
                              <td>{Vendor.category}</td>
                              <td>{Vendor.packageName}</td>
                              <td>{Vendor.price}</td>
                              <td><img src={Variables.photoURL+Vendor.image} height={100} width={100}/></td> 
                              <td>
                                <Link className="btn btn-icon icon-left btn-outline-info" to={`/editVendor/${Vendor.vendorID}`}><i className="far fa-edit"></i>Edit</Link>
                                </td>
                                <td>
                                <button className="btn btn-icon icon-left btn-outline-danger" onClick={() => handleDelete(Vendor.vendorID)}><i className="fas fa-times"></i>Delete</button>
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

export default ShowVendor;