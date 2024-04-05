import { useEffect, useState } from "react";
import { Variables } from "./utils/Variables";

function Profile() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    useEffect(() => {
        const userID = sessionStorage.getItem("userID");
        fetchCustomer(userID);
        if (!sessionStorage.getItem("isLogin")) {

        }

    }, []);
    const fetchCustomer = (id) => {
        try {
            const url = Variables.apiURL + "Customer/" + id;
            fetch(url, {
                method: "GET",
                headers: { accept: "Application/json", "content-type": "Application/json", },
            }).then((response) => response.json())
                .then((data) => {
                    console.log(data);

                    setName(data.data.name);
                    setEmail(data.data.email);
                    setMobileNo(data.data.mobileNo);
                }, (error) => {
                    console.log(error);
                    alert("Failed");
                });
        } catch (error) {
            console.error('Error fetching options:', error);
        }
    };
    return (

        <div class="main-content">
            <form >

                <div class="edit-pro-parti">
                    <div class="form-tit">
                        <h4>Basic info</h4>
                        
                    </div>
                    <div class="form-group">
                        <label class="lb">Name:</label>
                        <input type="text" class="form-control" placeholder="Enter your full name"
                            name="name" value={name} onChange={(e) => setName(e.target.value)} required="" />
                    </div>
                    <div class="form-group">
                        <label class="lb">Email:</label>
                        <input type="email" class="form-control" id="email"
                            placeholder="Enter email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required="" />
                    </div>
                    <div class="form-group">
                        <label class="lb">Phone:</label>
                        <input type="text" class="form-control" 
                            placeholder="Enter phone number" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} required="" />
                    </div>
                  </div> 
            </form>
        </div>


    );
}
export default Profile;