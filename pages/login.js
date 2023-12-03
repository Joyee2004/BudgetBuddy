import axios from 'axios'
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
const Login = (props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    // Make an API call to the login endpoint
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const responseData = await response.json(); // Parse response body as JSON
        console.log("Login successful:", responseData.message);

        navigate(responseData.redirect);
      } else {
        // Handle login failure
        const errorData = await response.json(); // Parse error response body as JSON
        console.error("Login failed:", errorData.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="completel">
      <div className="login-img">
        <img
          src="https://cdn.pixabay.com/photo/2022/12/10/13/46/attack-7647136_640.png"
          alt="login-img"
        />
      </div>
      <div className="auth-form-container">
        <h2 className="headerl">LOGIN</h2>
        <form className="login-form" method="post" action="/login">
          <label className="loglabel" htmlFor="username">
            Username
          </label>
          <input
            className="log"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="your username"
            id="username"
            name="username"
            required
          />
          <label className="loglabel" htmlFor="password">
            Password
          </label>
          <input
            className="log"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
            required
          />
          <button className="sign-up" onClick={handleLogin}>
            Log In
          </button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Don't have an account? Register here.
        </button>
      </div>
    </div>
  );
};
export default Login;
