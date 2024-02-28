import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Variables } from "./utils/Variables";

function AddVenue() {
  useScript('/assets/bundles/echart/echarts.js');
 
  const [venueID, setVenueID] = useState('');
  const [venueName, setVenueName] = useState('');
  const [capacity, setCapacity] = useState('');
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [packageList, setPackageList] = useState([]);
  const [packageID, setPackageID] = useState("");
  
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchPackageList();
    if (id) {
      fetchVenue();
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

  const fetchVenue = async () => {
    try {
      const request = await fetch(Variables.apiURL + "Venue/" + id);
      if (!request.ok) {
        throw new Error('Failed to fetch options');
      }
      const response = await request.json();
      console.log(response);
      setVenueID(response.data.venueID);
      setVenueName(response.data.venueName);
      setCapacity(response.data.capacity);
      setContactPerson(response.data.contactPerson);
      setEmail(response.data.email);
      setMobileNo(response.data.mobileNo);
      setAddress(response.data.address);
      setPrice(response.data.price);
      setCity(response.data.city);
      setArea(response.data.area);
      setPackageID(response.data.packageID);
      

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
      formData.append("VenueID", id);
    } else {
      
      formData.append("venueName", venueName);
      formData.append("capacity", capacity);
      formData.append("contactPerson", contactPerson);
      formData.append("email", email);
      formData.append("mobileNo", mobileNo);
      formData.append("address", address);
      formData.append("image", selectedFile); // Make sure selectedFile is defined
      formData.append("price", price);
      formData.append("city", city);
      formData.append("area", area);
      formData.append("packageID", packageID);
      
      
    }
  
    const url = id ? Variables.apiURL + "Venue/update" : Variables.apiURL + "Venue/add";
  
    fetch(url, {
      method: "POST",
      body: formData // Don't manually set Content-Type
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === "success") {
        navigate("/showVenue");
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
                      <h4>Add Venue</h4>
                    </div>
                    <div class="card-body">
                   
                      <div class="form-group">
                        <label>VenueName</label>
                        <input type="text" class="form-control" value={venueName} onChange={(e) => setVenueName(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                        <label>Capacity</label>
                        <input type="text" class="form-control" value={capacity} onChange={(e) => setCapacity(e.target.value)} required=""/>
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
                        <input type="text" class="form-control" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} required=""/>
                      </div>
                      <div class="form-group mb-0">
                        <label>Address</label>
                        <textarea class="form-control" value={address} onChange={(e) => setAddress(e.target.value)} required=""></textarea>
                      </div>
                      <div className="form-group">
                      <label for="imageUpload"></label>
                      <input type="file" onChange={handleFileChange} accept="image/*" placeholder="#" />
                    </div>
                    
                    <div class="form-group">
                        <label>price</label>
                        <input type="text" class="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                        <label>City</label>
                        <input type="text" class="form-control" value={city} onChange={(e) => setCity(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                        <label>Area</label>
                        <input type="text" class="form-control" value={area} onChange={(e) => setArea(e.target.value)} required=""/>
                      </div>
                      <label>Package</label>
                      <select class="form-control" value={packageID} onChange={handleChange}>
                        <option value="" >Select </option>
                        {packageList.map(Package => (
                          <option key={Package.packageID} value={Package.packageID}>{Package.packageName}</option>
                        ))}
                      </select>
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

export default AddVenue;