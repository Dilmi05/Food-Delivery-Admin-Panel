import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () =>{
  return(
    <div>
      <Navbar></Navbar>
      <hr></hr>
      <div className="app-content"> </div>
      <Sidebar></Sidebar>
    </div>
  )
}

export default App;
