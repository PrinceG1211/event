import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Variables } from "./utils/Variables";

function AddVendor() {
  useScript('/assets/bundles/echart/echarts.js');
 
  const [vendorID, setvendorID] = useState('');
  const [bname, setBname] = useState('');
  const [vendorName, setVendorName] = useState('');
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState('');
  const [packageList, setPackageList] = useState([]);
  const [packageID, setPackageID] = useState("");
  const [price, setPrice] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
 const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchPackageList();
    if (id) {
      fetchVendor();
    }
  }, []);

  const fetchPackageList = async () => {
    try {
      const request = await fetch(Variables.apiURL + "PackageDetail");
      if (!request.ok) {
        throw new Error('Failed to fetch options');
      }
      const response = await request.json();
      console.log(response);
      setPackageList(response.data);
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  const fetchVendor = async () => {
    try {
      const request = await fetch(Variables.apiURL + "Vendor/" + id);
      if (!request.ok) {
        throw new Error('Failed to fetch options');
      }
      const response = await request.json();
      console.log(response);
      setvendorID(response.data.vendorID);
      setBname(response.data.bname);
      setVendorName(response.data.vendorName);
      setContactPerson(response.data.contactPerson);
      setEmail(response.data.email);
      setContactNo(response.data.contactNo);
      setAddress(response.data.address);
      setCategory(response.data.category);
      setPackageID(response.data.packageID);
      setPrice(response.data.price);
    
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  const handleChange = (e) => {
    setPackageID(e.target.value);
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
      formData.append("bname",bname );
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
        <div class="main-content">
        <section class="section">
          <div class="section-body">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-6">
                <div class="card">
                  <form onSubmit={handleSubmit}> 
                    <div class="card-header">
                      <h4>Add Vendor</h4>
                    </div>
                    <div class="card-body">
                   
                    <div class="form-group">
                        <label>BName</label>
                        <input type="text" class="form-control" value={bname} onChange={(e) => setBname(e.target.value)} required=""/>
                      </div>

                      <div class="form-group">
                        <label>VendorName</label>
                        <input type="text" class="form-control" value={vendorName} onChange={(e) => setVendorName(e.target.value)} required=""/>
                      </div>
                     
                      <div class="form-group">
                        <label>ContactPerson</label>
                        <input type="text" class="form-control" value={contactPerson} onChange={(e) => setContactPerson(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                        <label>MobileNo</label>
                        <input type="text" class="form-control" value={contactNo} onChange={(e) => setContactNo(e.target.value)} required=""/>
                      </div>
                      <div class="form-group mb-0">
                        <label>Address</label>
                        <textarea class="form-control" value={address} onChange={(e) => setAddress(e.target.value)} required=""></textarea>
                      </div>
                      <div class="form-group mb-0">
                        <label>Category</label>
                        <textarea class="form-control" value={category} onChange={(e) => setCategory(e.target.value)} required=""></textarea>
                      </div>
                      <label>Package</label>
                      <select class="form-control" value={packageID} onChange={handleChange}>
                        <option value="" >Select </option>
                        {packageList.map(Package => (
                          <option key={Package.packageID} value={Package.packageID}>{Package.packageName}</option>
                        ))}
                      </select>
                      <div class="form-group">
                        <label>price</label>
                        <input type="text" class="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required=""/>
                      </div>
                      <div className="form-group">
                      <label for="imageUpload"></label>
                      <input type="file" onChange={handleFileChange} accept="image/*" placeholder="#" />
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

export default AddVendor;