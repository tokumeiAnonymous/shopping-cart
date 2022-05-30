import ProductList from '../Model/ProductList';
import CartProduct from './CartProduct';
import './Cart.css';

// add checkout button
// create + and - button
// clear out cart after checkout

export default function Cart({ cart, updateCart, balance, updateBalance, clearCart }) {

    let totalAmount = 0;
    const cartList = cart.map( element => {
        const product = ProductList[element.itemID - 1];
        totalAmount = totalAmount + (parseInt(element.itemCount) * product.price);
        return <CartProduct key={product.id} product={product} count={element.itemCount}/>
    })

    function checkout(amount) {
        updateBalance(amount);
        clearCart();
    }

    return (
        <main className='cart'>
            {cartList}
            <div> Total: $ {totalAmount}</div>
            <div>Current Balance: $ {balance}</div>
            <button onClick={() => checkout(totalAmount)}>Check out</button>
        </main>
    )
}