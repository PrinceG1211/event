import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";
import { Variables } from "./utils/Variables";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddEventBooking() {
  useScript('/assets/bundles/echart/echarts.js');
  const [EventBooking, setEventBooking] = useState([]);
  const [bookingType, setBookingType] = useState('');
  const [customerID, setCustomerID] = useState("");
  const [eventID, setEventID] = useState("");
  const [packageID, setPackageID] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingStartDate, setBookingStartDate] = useState("");
  const [bookingEndDate, setBookingEndDate] = useState("");
  const [bookingStatus, setBookingStatus] = useState("");
  const [venue, setVenue] = useState("");
  const [noOfGuest, setNoOfGuest] = useState("");
  const [subTotal, setSubTotal] = useState("");
  const [totalCost, setTotalcost] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchEventBooking();
    if (id) {
      fetchEventBooking();
    }
  }, []);

  const fetchEventBooking = async () => {
    try {
      const request = await fetch(Variables.apiURL + "EventBooking/" + id);
      if (!request.ok) {
        throw new Error('Failed to fetch options');
      }
      const response = await request.json();
      console.log(response);
      setBookingType(response.data.bookingType);
      setCustomerID(response.data.customerID);
      setEventID(response.data.eventID);
      setBookingDate(response.data.bookingDate);
      setBookingStartDate(response.data.bookingStartDate);
      setBookingEndDate(response.data.bookingEndDate);
      setBookingStatus(response.data.status);
      setVenue(response.data.venue);
      setNoOfGuest(response.data.noOfGuest);
      setSubTotal(response.data.subTotal);
      setTotalcost(response.data.totalcost);
      setPackageID(response.data.packageID);
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  const handleChange = (e) => {
    setBookingDate(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    var body = [];
    if (id) {
      body = JSON.stringify({
        bookingID: id,
        bookingType: bookingType,
        customerID: customerID,
        eventID: eventID,
        packageID: packageID,
        bookingDate: bookingDate,
        bookingStartDate: bookingStartDate,
        bookingEndDate: bookingEndDate,
        bookingStatus: bookingStatus,
        venue: venue,
        noOfGuest: noOfGuest,
        subTotal: subTotal,
        totalCost: totalCost,
      });
    } else {
      body = JSON.stringify({
        bookingID: id,
        bookingType: bookingType,
        customerID: customerID,
        eventID: eventID,
        packageID: packageID,
        bookingDate: bookingDate,
        bookingStartDate: bookingStartDate,
        bookingEndDate: bookingEndDate,
        bookingStatus: bookingStatus,
        venue: venue,
        noOfGuest: noOfGuest,
        subTotal: subTotal,
        totalCost: totalCost,
      });
    }
    const url = id ? Variables.apiURL + "EventBooking/update" : Variables.apiURL + "EventBooking/add";
    fetch(url, {
      method: "POST",
      headers: { accept: "Application/json", "content-type": "Application/json", },
      body: body
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          console.log("Success");
          navigate("/showEventBooking");
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
                      <label>Booking Type</label>
                      <select class="form-control" value={id} onChange={handleChange}>
                        <option value="" >Select Event</option>
                        {EventBooking.map(EventBooking => (
                          <option key={EventBooking.id} value={EventBooking.id}>{EventBooking.bookingType}</option>
                        ))}
                      </select>
                    </div>
                    <div class="form-group">
                      <label>eventID</label>
                      <input type="text" class="form-control" value={eventID} onChange={(e) => setEventID(e.target.value)} required="" />
                    </div>
                    <div class="form-group mb-0">
                      <label>customerID</label>
                      <input type="text" class="form-control" value={customerID} onChange={(e) => setCustomerID(e.target.value)} required="" />
                    </div>
                    <div class="form-group">
                      <label>bookingDate</label>
                      <input type="date" class="form-control" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} required="" />
                    </div>
                    <div class="form-group">
                      <label>bookingStartDate</label>
                      <input type="date" class="form-control" value={bookingStartDate} onChange={(e) => setBookingStartDate(e.target.value)} required="" />
                    </div>
                    <div class="form-group">
                      <label>bookingEndDate</label>
                      <input type="date" class="form-control" value={bookingEndDate} onChange={(e) => setBookingEndDate(e.target.value)} required="" />
                    </div>
                    <div class="form-group">
                      <label>bookingStatus</label>
                      <select class="form-control" value={bookingStatus} onChange={(e) => setBookingStatus(e.target.value)}>
                        <option disabled="disabled" selected=""></option>
                        <option>Approve</option>
                        <option>Decline</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label>venue</label>
                      <input type="text" class="form-control" value={venue} onChange={(e) => setVenue(e.target.value)} required="" />
                    </div>
                    <div class="form-group">
                      <label>noOfGuest</label>
                      <input type="text" class="form-control" value={noOfGuest} onChange={(e) => setNoOfGuest(e.target.value)} required="" />
                    </div>
                    <div class="form-group">
                      <label>subTotal</label>
                      <input type="text" class="form-control" value={subTotal} onChange={(e) => setSubTotal(e.target.value)} required="" />
                    </div>
                    <div class="form-group">
                      <label>totalCost</label>
                      <input type="text" class="form-control" value={totalCost} onChange={(e) => setTotalcost(e.target.value)} required="" />
                    </div>
                    <div class="form-group">
                      <label>packageID</label>
                      <input type="text" class="form-control" value={packageID} onChange={(e) => setPackageID(e.target.value)} required="" />
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

export default AddEventBooking;