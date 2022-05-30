import './Shop.css';
import ProductList from '../Model/ProductList';
import Product from './Product';
import SearchBox from './SearchBox';

export default function Shop() {
    const productList = ProductList.map( product => (
        <Product key={product.id} product={product} />
    ))
    
    return (
        <>
        <SearchBox />
        <main className='shop'>
            {productList}
        </main>
        </>
    )
}