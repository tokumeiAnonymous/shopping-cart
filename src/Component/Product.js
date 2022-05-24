import Rating from "./Rating";
// import { Link } from "react-router-dom";


export default function Product(props) {
    const {name, price, rating, imageSrc} = props.product;
    
    return (
        <div className='product'>
            <img src={imageSrc} alt={name} />
            <div className="name">{name}</div>
            <div className="price">$ {price}</div>
            {rating >= 0 && <Rating rating={rating}/>}
        </div>
    )
}