import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Variables } from "./utils/Variables";

function AddVendor() {
  useScript('/assets/bundles/echart/echarts.js');
  const [Vendor, setVendor] = useState([]);
  const [vendorID, setVendorID] = useState('');
  const [bname, setBname] = useState('');
  const [vendorName, setVendorName] = useState('');
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [packageID, setPackageID] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchVendor();
    if(id){
      fetchVendor();
    }
  }, []);

  const fetchVendor = async () => {
    try {
      const request = await fetch(Variables.apiURL + "Vendor/"+id);
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
      setImage(response.data.image);
      
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };
  const handleMultipleFileChange=(e) => {
    setVendorID(e.target.value);
  }

  const handleSubmit = (e) => {
    
    e.preventDefault();
    var formData = new FormData();
    formData.append("vendorID", vendorID);
    formData.append("bname", bname);
    formData.append("contactPerson", contactPerson);
    formData.append("email", email);
    formData.append("contactNo", contactNo);
    formData.append("address", address);
    formData.append("category", category);
    formData.append("packageID", packageID);
    formData.append("price", price);

    gallery.forEach((image,index) => {
      formData.append(`images[${index}]`,image);
      })

      if(id) {
        formData.append("vendorID", id);
      }
    const url = id ? Variables.apiURL + "Vendor/update" : Variables.apiURL + "Vendor/add";
    fetch(url, {
      method: "POST",
      headers: { accept: "Application/json", "content-type": "Application/json", },
      body: body
    }).then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          navigate("/showVendor");
        }
      }).catch((e)=>console.log(e))
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
                      <h4>Vendor Data</h4>
                    </div>
                    <div class="card-body">
                      <div class="form-group">
                        <label>bname</label>
                        <input type="text" class="form-control" value={bname} onChange={(e) => setBname(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                        <label>vendorName</label>
                        <input type="text" class="form-control" value={vendorName} onChange={(e) => setVendorName(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                        <label>contactPerson</label>
                        <input type="text" class="form-control" value={contactPerson} onChange={(e) =>setContactPerson(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                        <label>email</label>
                        <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                        <label>contactNo</label>
                        <input type="text" class="form-control" value={contactNo} onChange={(e) => setContactNo(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                        <label>address</label>
                        <input type="text" class="form-control" value={address} onChange={(e) => setAddress(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                        <label>category</label>
                        <input type="text" class="form-control" value={category} onChange={(e) => setCategory(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                        <label>packageID</label>
                        <input type="text" class="form-control" value={packageID} onChange={(e) => setPackageID(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                        <label>price</label>
                        <input type="text" class="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                          <label for="imageUpload">Image</label>
                          <input type="file" multiple onChange={handleMultipleFileChange} accept="image/*" placeholder="Image" />
                       </div>
                    </div>
                    <div class="card-footer text-right">
                      <button class="btn btn-primary">Submit</button>
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

export default AddVendor ;