import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";
import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { Variables } from "./utils/variables";

function AddArea() {
  

  const [cities, setCity] = useState([]);
  const [cityID, setCityID] = useState('');
  const [areaName, setAreaName] = useState("");
  const [pincode, setPincode] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchCities();
    if(id){
      fetchArea();
    }
  }, []);

  const fetchCities = async () => {
    try {
      const request = await fetch(Variables.apiURL + "City");
      if (!request.ok) {
        throw new Error('Failed to fetch options');
      }
      const response = await request.json();
      console.log(response);
      setCity(response.data);
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  const fetchArea = async () => {
    try {
      const request = await fetch(Variables.apiURL + "Area/"+id);
      if (!request.ok) {
        throw new Error('Failed to fetch options');
      }
      const response = await request.json();
      console.log(response);
      setAreaName(response.data.areaName);
      setPincode(response.data.pincode);
      setCityID(response.data.cityID);
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  const handleChange = (e) => {
    setCityID(e.target.value);
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    var body = [];
    if (id) {
      body = JSON.stringify({
        areaID: id,
        areaName: areaName,
        cityID: cityID,
        pincode:pincode,
      });
    } else {
      body = JSON.stringify({
        areaName: areaName,
        cityID: cityID,
        pincode:pincode,
      });
    }
    const url = id ? Variables.apiURL + "Area/update" : Variables.apiURL + "Area/add";
    fetch(url, {
      method: "POST",
      headers: { accept: "Application/json", "content-type": "Application/json", },
      body: body
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          console.log("Success");
          navigate("/showArea");
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
                    <h4>Add Area</h4>
                  </div>
                  <div class="card-body">

                    <div class="form-group">
                      <label>City</label>
                      <select class="form-control" value={cityID} onChange={handleChange}>
                        <option value="" >Select City</option>
                        {cities.map(city => (
                          <option key={city.cityID} value={city.cityID}>{city.cityName}</option>
                        ))}
                      </select>
                    </div>
                    <div class="form-group">
                      <label>Name</label>
                      <input type="text" class="form-control" value={areaName} onChange={(e) => setAreaName(e.target.value)} />
                    </div>
                    <div class="form-group mb-0">
                      <label>Pincode</label>
                      <input type="text" class="form-control" value={pincode} onChange={(e) => setPincode(e.target.value)} />
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

export default AddArea;