import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Variables } from "./utils/Variables";

function AddHotel() {
  useScript('/assets/bundles/echart/echarts.js');
  const [hotelID, setHotelID] = useState([]);
  const [packageID, setPackageID] = useState('');
  const [hotelName, setHotelname] = useState("");
  const [rating, setRating] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchHotel();
    if(id){
      fetchHotel();
    }
  }, []);

  const fetchHotel = async () => {
    try {
      const request = await fetch(Variables.apiURL + "Hotel/"+id);
      if (!request.ok) {
        throw new Error('Failed to fetch options');
      }
      const response = await request.json();
      console.log(response);
      setHotelID(response.data.setHotelID)
      setPackageID(response.data.packageID);
      setHotelname(response.data.hotelName);
      setRating(response.data.rating);
      setEmail(response.data.email);
      setMobileNo(response.data.mobileNo);
      setAddress(response.data.address)
      setCity(response.data.city);
      setArea(response.data.area);
      setImage(response.data.image);
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    var body = [];
    if (id) {
      body = JSON.stringify({
        hotelID: id ,
        hotelname: hotelName ,
        rating: rating ,
        email : email ,
        mobileNo : mobileNo ,
        address : address ,
        city : city ,
        area : area ,
        image : image,
      });
    } else {
      body = JSON.stringify({

        hotelname: hotelName ,
        rating: rating ,
        email : email ,
        mobileNo : mobileNo ,
        address : address ,
        city : city ,
        area : area ,
        image : image,
      });
    }
    const url = id ? Variables.apiURL + "Hotel/update" : Variables.apiURL + "Hotel/add";
    fetch(url, {
      method: "POST",
      headers: { accept: "Application/json", "content-type": "Application/json", },
      body: body
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          console.log("Success");
          navigate("/showHotel");
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
                      <h4>Add Hodel</h4>
                    </div>
                    <div class="card-body">
                      
                      <div class="form-group">
                        <label>packageID</label>
                        <input type="text" class="form-control"  value={packageID} onChange={(e) => setPackageID(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                        <label>hotelName</label>
                        <input type="text" class="form-control"  value={hotelName} onChange={(e) => setHotelname(e.target.value)}  required=""/>
                      </div>
                      <div class="form-group mb-0">
                        <label>rating</label>
                        <input type="text" class="form-control" value={rating} onChange={(e) => setRating(e.target.value)}  required=""/>
                      </div>
                      <div class="form-group">
                        <label>email</label>
                        <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                        <label>mobileNo</label>
                        <input type="text" class="form-control" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)}required=""/>
                      </div>
                      <div class="form-group">
                        <label>address</label>
                        <input type="text" class="form-control"  value={address} onChange={(e) => setAddress(e.target.value)}required=""/>
                      </div>
                      <div class="form-group">
                        <label>city</label>
                        <input type="text" class="form-control"  value={city} onChange={(e) => setCity(e.target.value)}required=""/>
                      </div>
                      <div class="form-group">
                        <label>area</label>
                        <input type="t/*ext" class="form-control"  value={area} onChange={(e) => setArea(e.target.value)} required=""/>
                      </div>
                      <div class="form-group">
                          <label for="imageUpload"></label>
                          <input type="file" id="imageUpload" name="imageUpload" accept="image/*"/>
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

export default AddHotel;