// Import React
import { Routes, Route } from "react-router-dom";


// Import Components
import './App.scss';
import AOS from "aos";
import Home from './Pages/Home/Home';
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Loader from "./Components/Loader/Loader";


function App() {

  AOS.init({});

  return (
    <>
      {/* <Loader /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
