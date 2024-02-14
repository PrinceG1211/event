import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";
import { Variables } from "./utils/Variables";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
  useScript('/assets/bundles/echart/echarts.js');

  const [Employee, setemployee] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [dob, setDob] = useState("");
  const [doj, setDoj] = useState("");
  const [type, setType] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchEmployee();
    if(id){
      fetchEmployee();
    }
  }, []);

  const fetchEmployee = async () => {
    try {
      const request = await fetch(Variables.apiURL + "Employee");
      if (!request.ok) {
        throw new Error('Failed to fetch options');
      }
      const response = await request.json();
      console.log(response);
      setEmployee(response.data);
      setName(response.data);
      setEmail(response.data);
      setMobileNo(response.data);
      setDob(response.data);
      setDoj(response.data);
      setType(response.data);
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    var body = [];
    if (id) {
      body = JSON.stringify({
        employeeID: id,
        name: name,
        email: email,
        mobileNo:mobileNo,
        dob: dob,
        doj: doj,
        type: type,
      });
    } else {
      body = JSON.stringify({
        employeeID: id,
        name: name,
        email: email,
        mobileNo:mobileNo,
        dob: dob,
        doj: doj,
        type: type,
      });
    }
    const url = id ? Variables.apiURL + "Employee/update" : Variables.apiURL + "Employee/add";
    fetch(url, {
      method: "POST",
      headers: { accept: "Application/json", "content-type": "Application/json", },
      body: body
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          console.log("Success");
          navigate("/showEmployee");
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
                  <form>
                    <div class="card-header">
                      <h4>Add Employee</h4>
                    </div>
                    <div class="card-body">
                      <div class="form-group">
                        <label>Your Name</label>
                        <input type="text" class="form-control" value={name} onChange={(e) => setName(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" value={name} onChange={(e) => setEmail(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                        <label>MobileNo</label>
                        <input type="text" class="form-control" value={name} onChange={(e) => setMobileNo(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                        <label>Dob</label>
                        <input type="date" class="form-control" value={name} onChange={(e) => setDob(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                        <label>Doj</label>
                        <input type="date" class="form-control" value={name} onChange={(e) => setDoj(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                        <label>Type</label>
                        <input type="text" class="form-control" value={name} onChange={(e) => setType(e.target.value)} required=""/>
                      </div>
                     
                    </div>
                    <div class="card-footer text-right">
                      <button class="btn btn-primary">Submit</button>
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

export default AddEmployee;