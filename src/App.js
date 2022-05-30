import Header from './Component/Header';
import Footer from './Component/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Component/Homepage';
import Shop from './Component/Shop';
import Cart from './Component/Cart';
import Account from './Component/Account';
import './App.css';
import { useState } from 'react';
import ProductFullView from './Component/ProductFullView';
import Error404 from './Component/Error404';

function App() {

  const [cart, setCart] = useState([]);
  const [balance, setBalance] = useState(10000);

  function updateBalance(amount) {
    setBalance( prev => prev - amount);
  }

  function addToCart(itemCount, itemID) {
    if (itemCount <= 0) return;
    let idExist = false;
    let newCart = cart.map( item => {
      if (item.itemID === itemID) {
        idExist = true;
        return {itemCount: item.itemCount + itemCount, 
                itemID: itemID}
      }
      return item;
    })
    if (!idExist) newCart = [...newCart, {itemCount, itemID}];
    setCart(newCart);
  }

  function updateCountFromCart(itemID, isReduce) {
    const tempCart = [...cart];
    // use filter
    const newCart = tempCart.map( item => {
      if (item.itemID === itemID) {
        isReduce ? item.itemCount-- : item.itemCount++;
        // eslint-disable-next-line
        if (item.itemCount === 0) return;
      }
      return item;
    })
    setCart(newCart);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <div className="App">
        <BrowserRouter>
          <Header cart={cart}/>
          <Routes>
            <Route path='*' element={<Error404 />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' 
            element={<Cart cart={cart} 
            updateCart={updateCountFromCart}
            balance={balance}
            updateBalance={updateBalance}
            clearCart={clearCart}/>} />
            <Route path='/account' 
            element={<Account balance={balance}
            />} />
            <Route path='/shop/:id' element={<ProductFullView addTocart={addToCart}/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
