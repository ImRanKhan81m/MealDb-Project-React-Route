
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
