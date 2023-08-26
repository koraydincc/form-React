import "./App.css";
import MainPage from "./pages/MainPage";
import About from './pages/About'
import {Route, Routes} from 'react-router-dom'
import NavBar from './components/Navbar'
import Herbalife from "./pages/Herbalife";
import WrongPage from "./components/WrongPage";
import BenKimim from "./components/BenKimim";
import Success from "./pages/Success";
import { useEffect, useState } from "react";
import axios from 'axios';


function App() {


  
  
  return <div className="App">
    
     
    <Routes>
      <Route path="/" element={<MainPage></MainPage>}></Route>
      <Route path="/Hakkımda" element={<About></About>}>
        <Route path="BenKimim" element={<BenKimim></BenKimim>}></Route>
        <Route path="Herbalife" element={<Herbalife></Herbalife>}></Route>
      </Route>
      <Route path="/herbalife" element={<Herbalife></Herbalife>} ></Route>
      <Route path="*" element={<WrongPage></WrongPage>}></Route>
      <Route path="/Sonuclar" element={<Success ></Success>}></Route>
    </Routes>
    

  </div>;
}

export default App;
