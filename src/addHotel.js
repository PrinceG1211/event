import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Variables } from "./utils/Variables";

function AddHotel() {
  useScript('/assets/bundles/echart/echarts.js');
 
  const [hotelID, sethotelID] = useState('');
  const [packageID, setPackageID] = useState("");
  const [hotelName, setHotelName] = useState('');
  const [rating, setRating] = useState('');
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [packageList, setPackageList] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchPackageList();
    if (id) {
      fetchHotel();
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

  const fetchHotel = async () => {
    try {
      const request = await fetch(Variables.apiURL + "Hotel/" + id);
      if (!request.ok) {
        throw new Error('Failed to fetch options');
      }
      const response = await request.json();
      console.log(response);
      sethotelID(response.data.hotelID);
      setPackageID(response.data.packageID);
      setHotelName(response.data.hotelName);
      setRating(response.data.rating);
      setEmail(response.data.email);
      setMobileNo(response.data.mobileNo);
      setAddress(response.data.address);
      setCity(response.data.city);
      setArea(response.data.area);    
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
      formData.append("hotelID", id);
      
    } 
      formData.append("packageID", packageID);
      formData.append("hotelName",hotelName);
      formData.append("rating", rating);
      formData.append("email", email);
      formData.append("mobileNo", mobileNo);
      formData.append("address", address);
      formData.append("city", city);
      formData.append("area", area);

      formData.append("image", selectedFile); // Make sure selectedFile is defined

    const url = id ? Variables.apiURL + "Hotel/update" : Variables.apiURL + "Hotel/add";
  
    fetch(url, {
      method: "POST",
      body: formData // Don't manually set Content-Type
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === "success") {
        navigate("/showHotel");
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
                      <h4>Add Hotel</h4>
                    </div>
                    <div class="card-body">
                   
                    <label>Package</label>
                      <select class="form-control" value={packageID} onChange={handleChange}>
                        <option value="" >Select </option>
                        {packageList.map(Package => (
                          <option key={Package.packageID} value={Package.packageID}>{Package.packageName}</option>
                        ))}
                      </select>
                    <div class="form-group">
                        <label>hotelName</label>
                        <input type="text" class="form-control" value={hotelName} onChange={(e) => setHotelName(e.target.value)} required=""/>
                      </div>

                      <div class="form-group">
                        <label>rating</label>
                        <input type="text" class="form-control" value={rating} onChange={(e) => setRating(e.target.value)} required=""/>
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

                      <div class="form-group">
                        <label>City</label>
                        <input type="text" class="form-control" value={city} onChange={(e) => setCity(e.target.value)} required=""/>
                      </div>

                      <div class="form-group">
                        <label>Area</label>
                        <input type="text" class="form-control" value={area} onChange={(e) => setArea(e.target.value)} required=""/>
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

export default AddHotel;