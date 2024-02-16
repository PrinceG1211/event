import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Variables } from "./utils/Variables";

function AddEmployeeEvent() {
  useScript('/assets/bundles/echart/echarts.js');
 
  const [employeeEvent, setEmployeeEvent] = useState([]);
  const [employeeID, setEmployeeID] = useState('');
  const [eventID, setEventID] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchEmployeeEvent();
    if(id){
      fetchEmployeeEvent();
    }
  }, []);

  const fetchEmployeeEvent = async () => {
    try {
      const request = await fetch(Variables.apiURL + "EmployeeEvent/"+id);
      if (!request.ok) {
        throw new Error('Failed to fetch options');
      }
      const response = await request.json();
      console.log(response);
      setEmployeeID(response.data.employeeID);
      setEventID(response.data.eventID);
      
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    var body = [];
    if (id) {
      body = JSON.stringify({
        employeeEventID: id,
        employeeID: employeeID,
        eventID: eventID,
        
      });
    } else {
      body = JSON.stringify({
        employeeEventID: id,
        employeeID: employeeID,
        eventID: eventID,
      });
    }
    const url = id ? Variables.apiURL + "EmployeeEvent/update" : Variables.apiURL + "EmployeeEvent/add";
    fetch(url, {
      method: "POST",
      headers: { accept: "Application/json", "content-type": "Application/json", },
      body: body
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          console.log("Success");
          navigate("/showEmployeeEvent");
        }
      }, (error) => {
        console.log(error);
        alert("Failed");
      })
  };
  useScript("/assets/js/scripts.js");
  useScript("/assets/js/custom.js");

    return (<>
        <Header></Header>
        <div class="main-content">
        <section class="section">
          <div class="section-body">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-6">
                <div class="card">
                  <form onSubmit={handleSubmit}>
                    <div class="card-header">
                      <h4>EmployeeEvent</h4>
                    </div>
                    <div class="card-body">
                     
                      <div class="form-group">
                        <label>employeeID</label>
                        <input type="email" class="form-control"  value={employeeID} onChange={(e) => setEmployeeID(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                        <label>eventID</label>
                        <input type="email" class="form-control" value={eventID} onChange={(e) => setEventID(e.target.value)} required=""/>
                      </div>
                      
                    </div>
                    <div class="card-footer text-right">
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
                <div class="card">
                
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-6">
                <div class="card">
                  
                </div>
                <div class="card">
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
        <Footer></Footer>
    </>);
}

export default AddEmployeeEvent ;