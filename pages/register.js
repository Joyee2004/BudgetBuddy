import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "../Components/checkbox.js";
import "./login.css";

const Register = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const [gusername, setGusername] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, username, pass }),
      });

      if (response.ok) {
        const responseData = await response.json(); // Parse response body as JSON
        console.log("Register successful:", responseData.message);
        navigate(responseData.redirect);
      } else {
        // Handle login failure
        const errorData = await response.json(); // Parse error response body as JSON
        console.error("Register failed:", errorData.message);
      }
    } catch (error) {
      console.error("Error during Register:", error);
    }
  };

  return (
    <div className="completer">
      <div className="register-all">
        <div className="register-img">
          <img
            src="https://png.pngtree.com/template/20211026/ourmid/pngtree-blue-gradient-cartoon-minimalist-style-login-background-page-image_693616.jpg"
            alt="login-img"
          />
        </div>
        <div className="form-container">
          <h2 className="headerll">
            <center>SIGN UP</center>
          </h2>
          <form className="register-form" onSubmit={handleSubmit}>
            <p className="text">
              {" "}
              <b>
                <i>Hey buddy,its time to track and manage your expenses!!</i>
              </b>
            </p>
            <label className="loglabel" htmlFor="name">
              Full name
            </label>
            <input
              className="log"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="full Name"
              required
            />
            <label className="loglabel" htmlFor="email">
              Email
            </label>
            <input
              className="log"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
              required
            />
            <label className="loglabel" htmlFor="username">
              Set user name
            </label>
            <input
              className="log"
              value={username}
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              placeholder="user Name"
              required
            />
            <label className="loglabel" htmlFor="password">
              Password
            </label>
            <input
              className="log"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
              required
            />

            <Checkbox label="I agree to terms & conditions" />

            <button type="submit" className="sign-up">
              Sign up
            </button>
          </form>
          <a href="/login">
            <button className="link-btnr">
              Already have an account? Login here.
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Register;
