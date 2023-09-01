import "./index.css";
import Navbar from "./components/Navbar"
import { Route, Router, Routes } from "react-router-dom";
import Home from "./routers/Home";
import About from "./routers/About";
import Service from "./routers/Service";
import Contact from "./routers/Contact";


export default function App(){
  return(
    <div className="App">
      <div>    
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/service" element={<Service/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>

          </Routes>
         <Navbar/>
       </div>
    </div>
  )
}