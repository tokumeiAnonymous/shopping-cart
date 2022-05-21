import Header from './Component/Header';
import Footer from './Component/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Component/Homepage';
import Shop from './Component/Shop';
import Cart from './Component/Cart';
import Account from './Component/Account';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/account' element={<Account />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
