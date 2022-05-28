import ProductList from '../Model/ProductList';
import { useParams } from 'react-router-dom';
// import './ProductFullView.css';
import Rating from './Rating';
import { useState } from 'react';

export default function ProductFullView({ addTocart }) {
    const [itemCount, setItemCount] = useState(0);

    function increment() {
        if (itemCount === 99) return;
        setItemCount(prev => prev + 1);
    }
    function decrement() {
        if (itemCount === 0) return;
        setItemCount(prev => prev - 1);
    }
    
    const { id } = useParams();

    // fake fetch for now
    const { name, imageSrc,
        price, rating,
        seller } = ProductList[id - 1];
    

    return (
        <main className='product-full'>
            <div className="product-full--details">
                <img src={imageSrc} alt={name} />
                <div>
                    <div>{name}</div>
                    <div className='price'>$ {price}</div>
                    {rating >= 0 && <Rating rating={rating}/>}
                    <div>{seller}</div>
                    <button onClick={decrement}> - </button>
                    {itemCount}
                    <button onClick={increment}> + </button>
                    <button onClick={() => addTocart(itemCount, id)}>Add to cart</button>
                </div>
            </div>
            <div className='comments'>
                Comments: <br />
            </div>
        </main>
    )
}