import Header from './Component/Header';
import Footer from './Component/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Component/Homepage';
import Shop from './Component/Shop';
import Cart from './Component/Cart';
import Account from './Component/Account';
import './App.css';
import { useState, /* createContext */ } from 'react';
import ProductFullView from './Component/ProductFullView';

// export const CartContext = createContext();

function App() {

  const [cart, setCart] = useState([]);

  function addToCart(itemCount, itemID) {
    setCart(prev => [...prev, { itemCount, itemID }]);
  }

  return (
    <div className="App">
      {/* <CartContext.Provider value={addToCart}> */}
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<Cart cart={cart}/>} />
            <Route path='/account' element={<Account />} />
            <Route path='/shop/:id' element={<ProductFullView addTocart={addToCart}/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      {/* </CartContext.Provider> */}
    </div>
  );
}

export default App;
