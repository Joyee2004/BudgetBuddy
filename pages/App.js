import React from "react";
import "./App.css";
import Navbar from "./Components/Navigation/Navbar.js";
import Home from "./Components/Home.js";
import Footer from "./Components/Footer.js";

const App=()=> {
  return (
    <div className="Appa">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
export default App;