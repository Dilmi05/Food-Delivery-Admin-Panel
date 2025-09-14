import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import {Routes,Route} from "react-router-dom"
import Add from "./Pages/Add/Add";
import List from "./Pages/List/List";
import Order from "./Pages/Order/Order"
const App = () =>{
  return(
    <div>
      <Navbar></Navbar>
      <hr></hr>
      <div className="app-content"> 
      <Sidebar></Sidebar>
      <Routes>
         <Route path="/add" element={<Add></Add>}> </Route>
         <Route path="/list" element={<List></List>}></Route>
         <Route path="/order" element={<Order></Order>}></Route>
      </Routes>
    </div>
    </div>
  )
}

export default App;
