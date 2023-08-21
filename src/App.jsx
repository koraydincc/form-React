import "./App.css";
import MainPage from "./pages/MainPage";
import About from './pages/About'
import {Route, Routes} from 'react-router-dom'
import NavBar from './components/Navbar'
import Herbalife from "./pages/Herbalife";
import WrongPage from "./components/WrongPage";


function App() {
  return <div className="App">
    
     
    <Routes>
      <Route path="/" element={<MainPage></MainPage>}></Route>
      <Route path="/About" element={<About></About>}></Route>
      <Route path="/herbalife" element={<Herbalife></Herbalife>} ></Route>
      <Route path="*" element={<WrongPage></WrongPage>}></Route>
    </Routes>
    

  </div>;
}

export default App;
