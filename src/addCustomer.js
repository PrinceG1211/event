import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Variables } from "./utils/Variables";


function AddCustomer() {
  useScript('/assets/bundles/echart/echarts.js');
  const [customer, setCustomer] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchCustomer();
    if(id){
      fetchCustomer();
    }
  }, []);

  const fetchCustomer = async () => {
    try {
      const request = await fetch(Variables.apiURL + "Customer");
      if (!request.ok) {
        throw new Error('Failed to fetch options');
      }
      const response = await request.json();
      console.log(response);
      setCustomer(response.data);
      setName(response.data);
      setEmail(response.data);
      setMobileNo(response.data);
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    var body = [];
    if (id) {
      body = JSON.stringify({
        customerID: id,
        name: name,
        email: email,
        mobileNo:mobileNo,
      });
    } else {
      body = JSON.stringify({
        customerID: id,
        name: name,
        email: email,
        mobileNo:mobileNo,
      });
    }
    const url = id ? Variables.apiURL + "Customer/update" : Variables.apiURL + "Customer/add";
    fetch(url, {
      method: "POST",
      headers: { accept: "Application/json", "content-type": "Application/json", },
      body: body
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          console.log("Success");
          navigate("/showCity");
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
                  <form  onSubmit={handleSubmit}>
                    
                    <div class="card-header">
                      <h4>Add Customer</h4>
                    </div>
                    <div class="card-body">
                      <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" value={name} onChange={(e) => setName(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                        <label>MobileNo</label>
                        <input type="text" class="form-control" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} required=""/>
                      </div>
                    </div>
                    <div class="card-footer text-right">
                      <button  type="submit" class="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
        <Footer></Footer>
    </>);
}

export default AddCustomer;