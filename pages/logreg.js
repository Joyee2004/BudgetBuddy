import React, { useState } from "react";



import'./login.css';
import  Login  from "./login.js";
import  Register  from "./register";
const Logreg = () => {
    const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="complete">
      
      <div className="login-text">
        {currentForm === "login" ? (
          <Login onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div>
    </div>
  );
}

export default Logreg;
