import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Variables } from "./utils/Variables";

function AddEventDetail() {
  useScript('/assets/bundles/echart/echarts.js');
  const [eventBookingList, setEventBookingList] = useState([]);
  const [vendorList, setVendorList] = useState([]);
  const [eventID, setEventID] = useState('');
  const [vendorID, setVendorID] = useState("");
  const [date, setDate] = useState("");
  const [cost, setCost] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    fetchEventBooking();
    fetchvendor();
    if (id) {
      fetchEventDetail();
    }
  }, []);

  const fetchEventBooking = async () => {
    try {
      const request = await fetch(Variables.apiURL + "EventBooking" );
      if (!request.ok) {
        throw new Error('Failed to fetch options');
      }
      const response = await request.json();
      console.log(response);
      setEventBookingList(response.data);
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  const fetchvendor = async () => {
    try {
      const request = await fetch(Variables.apiURL + "Vendor" );
      if (!request.ok) {
        throw new Error('Failed to fetch options');
      }
      const response = await request.json();
      console.log(response);
      setVendorList(response.data);
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  const fetchEventDetail = async () => {
    try {
      const request = await fetch(Variables.apiURL + "EventDetail/" + id);
      if (!request.ok) {
        throw new Error('Failed to fetch options');
      }
      const response = await request.json();
      console.log(response);
      setEventID(response.data.eventID);
      setVendorID(response.data.vendorID);
      setDate(response.data.date);
      setCost(response.data.cost);
      setDetails(response.data.details);
      setStatus(response.data.status);
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    var body = [];
    if (id) {
      body = JSON.stringify({
        eventDetailID: id,
        eventID: eventID,
        vendorID: vendorID,
        date: date,
        cost: cost,
        details: details,
        status: status,
      });
    } else {
      body = JSON.stringify({
        eventID: eventID,
        vendorID: vendorID,
        date: date,
        cost: cost,
        details: details,
        status: status,
      });
    }
    const url = id ? Variables.apiURL + "EventDetail/update" : Variables.apiURL + "EventDetail/add";
    fetch(url, {
      method: "POST",
      headers: { accept: "Application/json", "content-type": "Application/json", },
      body: body
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          console.log("Success");
          navigate("/showEventDetail");
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
                    <h4>EventDetail</h4>
                  </div>
                  <div class="card-body">
                    <div class="form-group">
                      <label>EventID</label>
                      <select class="form-control" value={eventID} onChange={(e) => setEventID(e.target.value)} required="">
                        <option disabled="disabled" selected=""></option>
                        {eventBookingList.map(eventBooking => (
                          <option key={eventBooking.bookingID } value={eventBooking.bookingID }>{eventBooking.bookingType}-{eventBooking.customerName}</option>
                        ))}
                      </select>
                    </div>
                    <div class="form-group">
                      <label>VendorID</label>
                      <select class="form-control" value={vendorID} onChange={(e) => setVendorID(e.target.value)} required="">
                        <option disabled="disabled" selected=""></option>
                        {vendorList.map(Vendor => (
                          <option key={Vendor.vendorID } value={Vendor.vendorID }>{Vendor.bname}-{Vendor.vendorName}</option>
                        ))}
                      </select>
                    </div>
                    <div class="form-group">
                      <label>date</label>
                      <input type="date" class="form-control" value={date} onChange={(e) => setDate(e.target.value)} required="" />
                    </div>
                    <div class="form-group mb-0">
                      <label>cost</label>
                      <textarea class="form-control" value={cost} onChange={(e) => setCost(e.target.value)} required=""></textarea>
                    </div>
                    <div class="form-group">
                      <label>details</label>
                      <input type="text" class="form-control" value={details} onChange={(e) => setDetails(e.target.value)} required="" />
                    </div>
                    <div class="form-group">
                      <label>Status</label>
                      <select class="form-control" value={status} onChange={(e) => setStatus(e.target.value)} required="">
                        <option disabled="disabled" selected=""></option>
                        <option>Approve</option>
                        <option>Decline</option>
                      </select>
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

export default AddEventDetail;