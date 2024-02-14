import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";

function AddEventBooking() {
  useScript('/assets/bundles/echart/echarts.js');

  useScript('/assets/bundles/echart/echarts.js');

  const [EventBooking, setEventBooking] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [dob, setDob] = useState("");
  const [doj, setDoj] = useState("");
  const [type, setType] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchEmployee();
    if(id){
      fetchEmployee();
    }
  }, []);

  const fetchEmployee = async () => {
    try {
      const request = await fetch(Variables.apiURL + "Employee/"+id);
      if (!request.ok) {
        throw new Error('Failed to fetch options');
      }
      const response = await request.json();
      console.log(response);
      setName(response.data.name);
      setEmail(response.data.email);
      setMobileNo(response.data.mobileNo);
      setDob(response.data.dob);
      setDoj(response.data.doj);
      setType(response.data.type);
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    var body = [];
    if (id) {
      body = JSON.stringify({
        employeeID: id,
        name: name,
        email: email,
        mobileNo:mobileNo,
        dob: dob,
        doj: doj,
        type: type,
      });
    } else {
      body = JSON.stringify({
        employeeID: id,
        name: name,
        email: email,
        mobileNo:mobileNo,
        dob: dob,
        doj: doj,
        type: type,
      });
    }
    const url = id ? Variables.apiURL + "Employee/update" : Variables.apiURL + "Employee/add";
    fetch(url, {
      method: "POST",
      headers: { accept: "Application/json", "content-type": "Application/json", },
      body: body
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          console.log("Success");
          navigate("/showEmployee");
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
                        <label>bookingID</label>
                        <input type="text" class="form-control" required=""/>
                      </div>
                      <div class="form-group">
                        <label>bookingType</label>
                        <input type="text" class="form-control" required=""/>
                      </div>
                      <div class="form-group">
                        <label>eventID</label>
                        <input type="text" class="form-control"/>
                      </div>
                      <div class="form-group mb-0">
                        <label>customerID</label>
                        <input type="text" class="form-control" required=""/>
                      </div>
                      <div class="form-group">
                        <label>bookingDate</label>
                        <input type="date" class="form-control" required=""/>
                      </div>
                      <div class="form-group">
                        <label>bookingStartDate</label>
                        <input type="date" class="form-control" required=""/>
                      </div>
                      <div class="form-group">
                        <label>bookingEndDate</label>
                        <input type="date" class="form-control" required=""/>
                      </div>
                      <div class="form-group">
                        <label>bookingStatus</label>
                        <input type="text" class="form-control" required=""/>
                      </div>
                      <div class="form-group">
                        <label>venue</label>
                        <input type="text" class="form-control" required=""/>
                      </div>
                      <div class="form-group">
                        <label>noOfGuest</label>
                        <input type="text" class="form-control" required=""/>
                      </div>
                      <div class="form-group">
                        <label>subTotal</label>
                        <input type="text" class="form-control" required=""/>
                      </div>
                      <div class="form-group">
                        <label>totalCost</label>
                        <input type="text" class="form-control" required=""/>
                      </div>
                      <div class="form-group">
                        <label>packageID</label>
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

export default AddEventBooking;