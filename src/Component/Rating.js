import star from '../Assets/Icons/star.svg'
import starFilled from '../Assets/Icons/star-filled.svg';

export default function Rating({rating}) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        rating > i ? 
        stars.push(<img key={i} className='star' src={starFilled} alt='filled star'></img>) :
        stars.push(<img key={i} className='star' src={star} alt='star'></img>)
    }
    return (
        <div className='rating'>
            {stars}
        </div>
    )
}