import ProductList from '../Model/ProductList';
import CartProduct from './CartProduct';
import './Cart.css';

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
        if (amount > balance) {
            showAlert();
            return;
        }
        updateBalance(amount);
        clearCart();
    }

    function showAlert() {
        const alert = document.querySelector('.warning-balance');
        alert.showModal();
    }

    function closeModal(){
        const alert = document.querySelector('.warning-balance');
        alert.close();
    }

    return (
        <main className='cart'>
            {cartList}
            <div> Total: $ {totalAmount}</div>
            <div>Current Balance: $ {balance}</div>
            <button onClick={() => checkout(totalAmount)}>Check out</button>
            <dialog className='warning-balance'>
                <div className="message">Not enough balance!</div>
                <button onClick={closeModal}>Close</button>
            </dialog>
        </main>
    )
}