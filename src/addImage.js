import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Variables } from "./utils/Variables";

function AddImage() {
  
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
                      <h4>Image</h4>
                    </div>
                    <div class="card-body">
                      <div class="form-group">
                        <label>imageID</label>
                        <input type="text" class="form-control" required=""/>
                      </div>
                      <div class="form-group">
                        <label>productID</label>
                        <input type="text" class="form-control" required=""/>
                      </div>
                      <div class="form-group">
                        <label>type</label>
                        <input type="text" class="form-control"/>
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
                
              </div>
             
            </div>
          </div>
        </section>
        
      </div>
        <Footer></Footer>
    </>);
}

export default AddImage ;