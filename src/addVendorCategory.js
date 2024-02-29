import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Variables } from "./utils/Variables";

function AddVendorCategory() {
  useScript('/assets/bundles/echart/echarts.js');
  
  const [categoryName, setCategoryName] = useState("");
  const [parentID, setParentID] = useState("");
  const [parentCategoryList, setParentCategoryList] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchParentCategoryList()
    if(id){
      fetchVendorCategory();
    }
  }, []);

  const fetchParentCategoryList = async () => {
    try {
      const request = await fetch(Variables.apiURL + "VendorCategory");
      if (!request.ok) {
        throw new Error('Failed to fetch options');
      }
      const response = await request.json();
      console.log(response);
      setParentCategoryList(response.data);
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  const fetchVendorCategory = async () => {
    try {
      const request = await fetch(Variables.apiURL + "VendorCategory/"+id);
      if (!request.ok) {
        throw new Error('Failed to fetch options');
      }
      const response = await request.json();
      console.log(response);
      setCategoryName(response.data.categoryName);
      setParentID(response.data.parentID);
     
     
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };
  const handleChange = (e) => {
    setParentID(e.target.value);
    
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    var body = [];
    if (id) {
      body = JSON.stringify({
        categoryID: id,
        categoryName: categoryName,
        parentID:parentID,
      });
    } else {
      body = JSON.stringify({
        categoryID: id,
        categoryName: categoryName,
        parentID:parentID,
      });
    }
    const url = id ? Variables.apiURL + "VendorCategory/update" : Variables.apiURL + "VendorCategory/add";
    fetch(url, {
      method: "POST",
      headers: { accept: "Application/json", "content-type": "Application/json", },
      body: body
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          console.log("Success");
          navigate("/showVendorCategory");
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
                        <label>categoryName</label>
                        <input type="text" class="form-control" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} required=""/>
                      </div>
                      <label>ParentID</label>
                      <select class="form-control" value={parentID} onChange={handleChange}>
                        <option value="" >Select </option>
                        {parentCategoryList.map(Parent => (
                          <option key={Parent.categoryID} value={Parent.categoryID}>{Parent.categoryName}</option>
                        ))}
                      </select>
                      
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

export default AddVendorCategory;