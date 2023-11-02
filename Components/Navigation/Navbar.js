import React from "react";
import "./Navbar.css";
import { BiSearch } from 'react-icons/bi';
import { IconContext } from "react-icons";

const Navbar = () => {
  const navigationItems = [
    { title: "EXPENSES", id:1 },
    { title: "FEATURES", id:2},
    { title: "OVERVIEW", id:3 },
  ];

  return (
    /*<nav>
      <ul>
        {navigationItems.map((item) => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </nav>*/
    <>
    <div className="navdes">
      <div className="flex-container">
        {navigationItems.map((item) =>(
        <button className="btn"><li key={item.id}>
             {item.title}
          </li>
          </button>
        ))}
      </div>
      <img className="logo" src="/img/bblogo.png" alt="Budgetbuddy"/>
      <div className="flex-container">
      <button id="login-btn">Login </button>
      <button id="signup-btn">Sign Up! </button>

      </div>
     
    </div>
    </>
  );
};
export default Navbar;