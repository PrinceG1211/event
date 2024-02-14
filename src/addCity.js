import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";

function AddCity() {
  useScript('/assets/bundles/echart/echarts.js');
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
                        <label>City ID</label>
                        <input type="text" class="form-control" required=""/>
                      </div>
                      <div class="form-group">
                        <label>CityName</label>
                        <input type="text" class="form-control" required=""/>
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
      </div>
        <Footer></Footer>
    </>);
}

export default AddCity;