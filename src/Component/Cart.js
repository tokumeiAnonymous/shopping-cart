import ProductList from '../Model/ProductList';
import Product from './Product';

export default function Cart({ cart }) {

    const cartList = cart.map( element => {
        const product = ProductList[element.itemID - 1];
        return <Product key={product.id} product={product} />
    })

    return (
        <main className='cart'>
            {cartList}
        </main>
    )
}