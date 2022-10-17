import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import { BounceLoader } from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";
import './App.css';
import About from './Pages/Home/About';
import Contacts from './Pages/Home/Contacts';
import Educations from './Pages/Home/Educations/Educations';
import Home from './Pages/Home/Home';
import Skill from './Pages/Home/Skill';
import Works from './Pages/Home/Works/Works';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import Shops from "./Pages/Shops/Shops";


function App() {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])
  return (
    <div className="sweet-loading">
      {
        loading ?
          <ClipLoader
            color={'#36d7b7'}
            loading={BounceLoader}
            cssOverride={''}
            size={200}
            aria-label="BounceLoader"
            data-testid="BounceLoader"
          />
          :
          <div className="max-w-7xl mx-auto">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/skill" element={<Skill />}></Route>
              <Route path="/education" element={<Educations />}></Route>
              <Route path="/work" element={<Works />}></Route>
              <Route path="/contact" element={<Contacts />}></Route>
              <Route path="/shop" element={<Shops />}></Route>
            </Routes>
            <Footer />
          </div>
      }
    </div>
  );
}

export default App;
