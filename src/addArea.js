import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";
import variables from "./utils/variables";
import { useState } from "react";

function AddArea() {
  useScript('/assets/bundles/echart/echarts.js');

  const [cities, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [areaName,setAreaName]=useState("");
  const [pincode,setpincode]=useState("");

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const request = await fetch(variables.baseUrl + "City");
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

  const handleChange = (e) => {
    setSelectedCity(e.target.value);
  };

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
                    <h4>Add Area</h4>
                  </div>
                  <div class="card-body">

                    <div class="form-group">
                      <label>City</label>
                      <select class="form-control" value={selectedCity} onChange={handleChange}>
                        <option value="" >Select City</option>
                        {cities.map(city => (
                          <option key={city.cityID} value={city.cityID}>{city.cityName}</option>
                        ))}
                      </select>
                    </div>
                    <div class="form-group">
                      <label>Name</label>
                      <input type="text" class="form-control" value={areaName} onChange={(e)=> setAreaName(e.target.value)} />
                    </div>
                    <div class="form-group mb-0">
                      <label>Pincode</label>
                      <input type="text" class="form-control" value={pincode} onChange={(e)=> setpincode(e.target.value)}  />
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

export default AddArea;