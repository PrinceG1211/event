import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Variables } from "./utils/Variables";

function AddVendor() {
  useScript('/assets/bundles/echart/echarts.js');
  //const [Vendor, setVendor] = useState([]);
  const [vendorID, setVendorID] = useState('');
  const [bname, setBname] = useState('');
  const [vendorName, setVendorName] = useState('');
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [address, setAddress] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [category, setCategory] = useState("");
  const [packageID, setPackageID] = useState("");
  const [price, setPrice] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {

    if (id) {
      fetchVendor();
    }
  }, []);

  const fetchVendor = async () => {
    try {
      const request = await fetch(Variables.apiURL + "Vendor/" + id);
      if (!request.ok) {
        throw new Error('Failed to fetch options');
      }
      const response = await request.json();
      console.log(response);
      setVendorID(response.data.vendorID);
      setBname(response.data.bname);
      setVendorName(response.data.vendorName);
      setEmail(response.data.email);
      setContactNo(response.data.contactNo);
      setContactPerson(response.data.contactPerson);
      setAddress(response.data.address);
      setCategory(response.data.category);
      setPackageID(response.data.packageID);
      setPrice(response.data.price);

    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
  
    if (id) {
      formData.append("vendorID", id);
    } else {
      formData.append("bname", bname);
      formData.append("vendorName", vendorName);
      formData.append("contactPerson", contactPerson);
      formData.append("email", email);
      formData.append("contactNo", contactNo);
      formData.append("address", address);
      formData.append("category", category);
      formData.append("packageID", packageID);
      formData.append("price", price);
      formData.append("image", selectedFile); // Make sure selectedFile is defined
    }
  
    const url = id ? Variables.apiURL + "Vendor/update" : Variables.apiURL + "Vendor/add";
  
    fetch(url, {
      method: "POST",
      body: formData // Don't manually set Content-Type
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === "success") {
        navigate("/showVendor");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  };

  useScript("/assets/js/scripts.js");
  useScript("/assets/js/custom.js");
  return (<>
    <Header></Header>
    <div className="main-content">
      <section className="section">
        <div className="section-body">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card">
                <form onSubmit={handleSubmit}>
                  <div className="card-header">
                    <h4>Vendor Data</h4>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label>bname</label>
                      <input type="text" className="form-control" value={bname} onChange={(e) => setBname(e.target.value)} required="" />
                    </div>
                    <div className="form-group">
                      <label>vendorName</label>
                      <input type="text" className="form-control" value={vendorName} onChange={(e) => setVendorName(e.target.value)} required="" />
                    </div>
                    <div className="form-group">
                      <label>contactPerson</label>
                      <input type="text" className="form-control" value={contactPerson} onChange={(e) => setContactPerson(e.target.value)} required="" />
                    </div>
                    <div className="form-group">
                      <label>email</label>
                      <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required="" />
                    </div>
                    <div className="form-group">
                      <label>contactNo</label>
                      <input type="text" className="form-control" value={contactNo} onChange={(e) => setContactNo(e.target.value)} required="" />
                    </div>
                    <div className="form-group">
                      <label>address</label>
                      <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} required="" />
                    </div>
                    <div className="form-group">
                      <label>category</label>
                      <input type="text" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} required="" />
                    </div>
                    <div className="form-group">
                      <label>packageID</label>
                      <input type="text" className="form-control" value={packageID} onChange={(e) => setPackageID(e.target.value)} required="" />
                    </div>
                    <div className="form-group">
                      <label>price</label>
                      <input type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required="" />
                    </div>
                    <div className="form-group">
                      <label for="imageUpload"></label>
                      <input type="file" onChange={handleFileChange} accept="image/*" placeholder="#" />
                    </div>
                  </div>
                  <div className="card-footer text-right">
                    <button type="submit" className="btn btn-primary">Submit</button>
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

export default AddVendor;