import ProductList from '../Model/ProductList';
import CartProduct from './CartProduct';
import './Cart.css';

// create + and - button
// if not enough balance show a pop up

export default function Cart({ cart, updateCart, balance, updateBalance, clearCart }) {

    let totalAmount = 0;
    const cartList = cart.map( element => {
        const product = ProductList[element.itemID - 1];
        totalAmount = totalAmount + (parseInt(element.itemCount) * product.price);
        return <CartProduct 
                key={product.id} 
                product={product} 
                count={element.itemCount}
                updateCart={updateCart}/>
    })

    function checkout(amount) {
        if (amount > balance) return;
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