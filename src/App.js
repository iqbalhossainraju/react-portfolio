import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About';
import Contacts from './Pages/Home/Contacts';
import Educations from './Pages/Home/Educations/Educations';
import Home from './Pages/Home/Home';
import Skill from './Pages/Home/Skill';
import Works from './Pages/Home/Works/Works';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/skill" element={<Skill />}></Route>
        <Route path="/education" element={<Educations />}></Route>
        <Route path="/work" element={<Works />}></Route>
        <Route path="/contact" element={<Contacts />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
