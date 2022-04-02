
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Order from './Components/Order/Order';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Shop from './Components/Shop/Shop';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='product-details/:id' element={<ProductDetails/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/order' element={<Order />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
