import { useState } from "react";
import { Variables } from "./utils/Variables";
import useScript from "./utils/useScript";
import { useNavigate } from "react-router-dom";
    function Login() {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const navigate = useNavigate();
        const handleSubmit = (e) => {
    
            e.preventDefault();
            var body = [];
    
            body = JSON.stringify({
                email: email,
                password: password,
            });
    
    
            const url = Variables.apiURL + "Auth/login";
            fetch(url, {
                method: "POST",
                headers: { accept: "Application/json", "content-type": "Application/json", },
                body: body
            }).then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    if (data.status === "success") {
                        sessionStorage.setItem("isLogin",true);
                        sessionStorage.setItem("userID",data.data.userID);
                        console.log("Success");
                        navigate("/");
                    }
                }, (error) => {
                    console.log(error);
                    alert("Failed");
                })
    
               
        };
    useScript("/assets/js/custom.js");
    useScript("/assets/js/scripts.js");
    return (
        <div id="app">
            <section class="section">
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                            <div class="card card-primary">
                                <div class="card-header">
                                    <h4>Login</h4>
                                </div>
                                <div class="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div class="form-group">
                                            <label for="email">Email</label>
                                            <input id="email" type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                            <div class="invalid-feedback">
                                                Please fill in your email
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="d-block">
                                            <label for="email">Password</label>
                                                <div class="float-right">
                                                    <a href="auth-forgot-password.html" class="text-small">
                                                        Forgot Password?
                                                    </a>
                                                </div>
                                            </div>
                                            <input id="password" type="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                            <div class="invalid-feedback">
                                                please fill in your password
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" name="remember" class="custom-control-input" tabindex="3" id="remember-me" />
                                                <label class="custom-control-label" for="remember-me">Remember Me</label>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary btn-lg btn-block" tabindex="4">
                                                Login
                                            </button>
                                        </div>
                                    </form>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Login;