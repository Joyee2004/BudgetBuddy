import React, { useState } from "react";
import image from "./images/login.png";


import'./login.css';
import { Login } from "./login";
import { Register } from "./register";
export const Logreg = () => {
    const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div  style ={{backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}}className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
     
    </div>
  )
}

