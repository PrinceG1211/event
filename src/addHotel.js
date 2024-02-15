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
                  <form>
                    <div class="card-header">
                      <h4>Default Validation</h4>
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
        <div class="settingSidebar">
          <a href="javascript:void(0)" class="settingPanelToggle"> <i class="fa fa-spin fa-cog"></i>
          </a>
          <div class="settingSidebar-body ps-container ps-theme-default">
            <div class=" fade show active">
              <div class="setting-panel-header">Setting Panel
              </div>
              <div class="p-15 border-bottom">
                <h6 class="font-medium m-b-10">Select Layout</h6>
                <div class="selectgroup layout-color w-50">
                  <label class="selectgroup-item">
                    <input type="radio" name="value" value="1" class="selectgroup-input select-layout" checked/>
                    <span class="selectgroup-button">Light</span>
                  </label>
                  <label class="selectgroup-item">
                    <input type="radio" name="value" value="2" class="selectgroup-input select-layout"/>
                    <span class="selectgroup-button">Dark</span>
                  </label>
                </div>
              </div>
              <div class="p-15 border-bottom">
                <h6 class="font-medium m-b-10">Sidebar Color</h6>
                <div class="selectgroup selectgroup-pills sidebar-color">
                  <label class="selectgroup-item">
                    <input type="radio" name="icon-input" value="1" class="selectgroup-input select-sidebar"/>
                    <span class="selectgroup-button selectgroup-button-icon" data-toggle="tooltip"
                      data-original-title="Light Sidebar"><i class="fas fa-sun"></i></span>
                  </label>
                  <label class="selectgroup-item">
                    <input type="radio" name="icon-input" value="2" class="selectgroup-input select-sidebar" checked/>
                    <span class="selectgroup-button selectgroup-button-icon" data-toggle="tooltip"
                      data-original-title="Dark Sidebar"><i class="fas fa-moon"></i></span>
                  </label>
                </div>
              </div>
              <div class="p-15 border-bottom">
                <h6 class="font-medium m-b-10">Color Theme</h6>
                <div class="theme-setting-options">
                  <ul class="choose-theme list-unstyled mb-0">
                    <li title="white" class="active">
                      <div class="white"></div>
                    </li>
                    <li title="cyan">
                      <div class="cyan"></div>
                    </li>
                    <li title="black">
                      <div class="black"></div>
                    </li>
                    <li title="purple">
                      <div class="purple"></div>
                    </li>
                    <li title="orange">
                      <div class="orange"></div>
                    </li>
                    <li title="green">
                      <div class="green"></div>
                    </li>
                    <li title="red">
                      <div class="red"></div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="p-15 border-bottom">
                <div class="theme-setting-options">
                  <label>
                    <span class="control-label p-r-20">Mini Sidebar</span>
                    <input type="checkbox" name="custom-switch-checkbox" class="custom-switch-input"
                      id="mini_sidebar_setting"/>
                    <span class="custom-switch-indicator"></span>
                  </label>
                </div>
              </div>
              <div class="p-15 border-bottom">
                <div class="theme-setting-options">
                  <div class="disk-server-setting m-b-20">
                    <p>Disk Space</p>
                    <div class="sidebar-progress">
                      <div class="progress" data-height="5">
                        <div class="progress-bar l-bg-green" role="progressbar" data-width="80%" aria-valuenow="80"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span class="progress-description">
                        <small>26% remaining</small>
                      </span>
                    </div>
                  </div>
                  <div class="disk-server-setting">
                    <p>Server Load</p>
                    <div class="sidebar-progress">
                      <div class="progress" data-height="5">
                        <div class="progress-bar l-bg-orange" role="progressbar" data-width="58%" aria-valuenow="25"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span class="progress-description">
                        <small>Highly Loaded</small>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-4 mb-4 p-3 align-center rt-sidebar-last-ele">
                <a href="#" class="btn btn-icon icon-left btn-primary btn-restore-theme">
                  <i class="fas fa-undo"></i> Restore Default
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Footer></Footer>
    </>);
}

export default AddHotel;