import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Product from './Pages/Home/Product/Product';
import Shop from './Pages/Home/Shop/Shop';
import BuyOrder from './Pages/Shared/BuyOrder/BuyOrder';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/products" element={<Product></Product>}></Route>
        <Route path="/BuyOrder" element={<BuyOrder></BuyOrder>}></Route>
      </Routes>
    </div>
  );
}

export default App;
