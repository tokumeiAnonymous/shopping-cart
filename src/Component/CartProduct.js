import Rating from './Rating';
import { Link } from 'react-router-dom';


export default function CartProduct(props) {
    const {id, name, price, rating, imageSrc} = props.product;
    const {updateCart} = props;
    
    return (
        <Link className='product' to={`/shopping-cart/shop/${id}`}>
            <img src={imageSrc} alt={name} />
            <div className="name">{name}</div>
            <div className="price">$ {price}</div>
            <div>Quantity: {props.count}</div>
            {rating >= 0 && <Rating rating={rating}/>}
            <button onClick={(event) => updateCart(event, id, true)}>-</button>
            <button onClick={(event) => updateCart(event, id, false)}>+</button>
        </Link>
    )
}