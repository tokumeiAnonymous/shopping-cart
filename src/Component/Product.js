import Rating from "./Rating";
import { Link } from "react-router-dom";


export default function Product(props) {
    const {id, name, price, rating, imageSrc} = props.product;
    
    return (
        <Link className='product' to={`/shopping-cart/shop/${id}`}>
            <img src={imageSrc} alt={name} />
            <div className="name">{name}</div>
            <div className="price">$ {price}</div>
            {rating >= 0 && <Rating rating={rating}/>}
        </Link>
    )
}