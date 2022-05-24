import './Shop.css';
import ProductList from '../Model/ProductList';
import Product from './Product';

export default function Shop() {
    const productList = ProductList.map( product => (
        <Product key={product.id} product={product} />
    ))
    
    return (
        <main className='shop'>
            {productList}
        </main>
    )
}