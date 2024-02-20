import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Variables } from "./utils/Variables";

function AddVenue() {
  useScript('/assets/bundles/echart/echarts.js');
  const [Venue, setVenue] = useState([]);
  const [venueName, setVenueName] = useState('');
  const [capacity,setCapacity] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [packageID, setPackageID] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchVenue();
    if(id){
      fetchVenue();
    }
  }, []);

  const fetchVenue = async () => {
    try {
      const request = await fetch(Variables.apiURL + "Venue/"+id);
      if (!request.ok) {
        throw new Error('Failed to fetch options');
      }
      const response = await request.json();
      console.log(response);
      setVenueName(response.data.venueName);
      setCapacity(response.data.capacity);
      setContactPerson(response.data.contactPerson);
      setEmail(response.data.email);
      setMobileNo(response.data.mobileNo);
      setAddress(response.data.address);
      setImage(response.data.image);
      setPrice(response.data.price);
      setCity(response.data.city);
      setArea(response.data.area);
      setPackageID(response.data.packageID);
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    var body = [];
    if (id) {
      body = JSON.stringify({
        venueID: id,
        venueName: venueName,
        capacity: capacity,
        contactPerson: contactPerson,
        email: email,
        mobileNo:mobileNo,
        address:address,
        image:image,
        price:price,
        city:city,
        area:area,
        packageID:packageID,
      });
    } else {
      body = JSON.stringify({
        venueID: id,
        venueName: venueName,
        capacity: capacity,
        contactPerson: contactPerson,
        email: email,
        mobileNo:mobileNo,
        address:address,
        image:image,
        price:price,
        city:city,
        area:area,
        packageID:packageID,
      });
    }
    const url = id ? Variables.apiURL + "Venue/update" : Variables.apiURL + "Venue/add";
    fetch(url, {
      method: "POST",
      headers: { accept: "Application/json", "content-type": "Application/json", },
      body: body
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          console.log("Success");
          navigate("/showVenue");
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
                      <h4>Default Validation</h4>
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
                      <div class="form-group">
                          <label for="image"></label><br></br>
                          <input type="file" id="imageUpload" name="imageUpload" accept="image/*"/>
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