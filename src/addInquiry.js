import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Variables } from "./utils/Variables";

function AddInquiry() {
  useScript('/assets/bundles/echart/echarts.js');
  const [customer, setCustomer] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [subject, setSubject] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchInquiry();
    if(id){
      fetchInquiry();
    }
  }, []);

  const fetchInquiry = async () => {
    try {
      const request = await fetch(Variables.apiURL + "Inquiry/"+id);
      if (!request.ok) {
        throw new Error('Failed to fetch options');
      }
      const response = await request.json();
      console.log(response);
      setName(response.data.name);
      setEmail(response.data.email);
      setMobileNo(response.data.mobileNo);
      setSubject(response.data.subject);
      setStatus(response.data.status);
      setDescription(response.data.description);
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    var body = [];
    if (id) {
      body = JSON.stringify({
        inquiryID: id,
        name: name,
        email: email,
        mobileNo:mobileNo,
        subject:subject,
        status:status,
        description:description,
      });
    } else {
      body = JSON.stringify({
        inquiryID: id,
        name: name,
        email: email,
        mobileNo:mobileNo,
        subject:subject,
        status:status,
        description:description,
      });
    }
    const url = id ? Variables.apiURL + "Inquiry/update" : Variables.apiURL + "Inquiry/add";
    fetch(url, {
      method: "POST",
      headers: { accept: "Application/json", "content-type": "Application/json", },
      body: body
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          console.log("Success");
          navigate("/showInquiry");
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
                      <h4>Add Inquiry</h4>
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
                      <div class="form-group">
                        <label>Subject</label>
                        <input type="text" class="form-control" value={subject} onChange={(e) => setSubject(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                        <label>Status</label>
                        <input type="text" class="form-control" value={status} onChange={(e) => setStatus(e.target.value)} required=""/>
                      </div>
                      <div class="form-group mb-0">
                        <label>Discription</label>
                        <textarea class="form-control"  value={description} onChange={(e) => setDescription(e.target.value)} required=""></textarea>
                      </div>
                    </div>
                    <div class="card-footer text-right">
                    <button type="submit" class="btn btn-primary">Submit</button>
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

export default AddInquiry;