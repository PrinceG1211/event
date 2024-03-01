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
  const [selectedFile, setSelectedFile] = useState(null);
  const [parentCategoryList, setParentCategoryList] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    fetchParentCategoryList();
    if (id) {
      fetchVendorCategory();
    }
  }, [id]);

  const fetchParentCategoryList = async () => {
    try {
      const request = await fetch(Variables.apiURL + "VendorCategory");
      if (!request.ok) {
        throw new Error('Failed to fetch parent category list');
      }
      const response = await request.json();
      if (response.status !== "success") {
        throw new Error('Invalid response format');
      }
      setParentCategoryList(response.data);
    } catch (error) {
      console.error('Error fetching parent category list:', error);
    }
  };
  
  const fetchVendorCategory = async () => {
    try {
      const request = await fetch(Variables.apiURL + "VendorCategory/"+id);
      if (!request.ok) {
        throw new Error('Failed to fetch vendor category');
      }
      const response = await request.json();
      if (response.status !== "success") {
        throw new Error('Invalid response format');
      }
      setCategoryName(response.data.categoryName);
      setParentID(response.data.parentID);
    } catch (error) {
      console.error('Error fetching vendor category:', error);
    }
  };
  
  const handleChange = (e) => {
    setParentID(e.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
  
    if (id) {
      formData.append("categoryID", id);
    } 
    formData.append("categoryName", categoryName);
    formData.append("image", selectedFile);
    formData.append("parentID", parentID);
    
    const url = id ? Variables.apiURL + "VendorCategory/update" : Variables.apiURL + "VendorCategory/add";
  
    fetch(url, {
      method: "POST",
      body: formData
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        navigate("/showVendorCategory");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  };
  
  useScript("/assets/js/scripts.js");
  useScript("/assets/js/custom.js");

  return (
    <>
      <Header />
      <div className="main-content">
        <section className="section">
          <div className="section-body">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card">
                  <form onSubmit={handleSubmit}>
                    <div className="card-header">
                      <h4>Default Validation</h4>
                    </div>
                    <div className="card-body">
                      <div className="form-group">
                        <label>categoryName</label>
                        <input type="text" className="form-control" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="imageUpload">Image</label>
                        <input type="file" onChange={handleFileChange} accept="image/*" placeholder="#" />
                      </div>
                      <label>ParentID</label>
                      <select className="form-control" value={parentID} onChange={handleChange}>
                        <option value="">Select</option>
                        {parentCategoryList.map(parent => (
                          <option key={parent.categoryID} value={parent.categoryID}>{parent.categoryName}</option>
                        ))}
                      </select>
                    </div>
                    <div className="card-footer text-right">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default AddVendorCategory;
