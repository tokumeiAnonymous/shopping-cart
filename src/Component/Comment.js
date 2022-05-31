import { useEffect, useState } from 'react';
import imageSrc from '../Assets/blank-profile.png';
import './Comment.css';
import Rating from './Rating';

export default function Comment({ user, comment }) {

  const [rating, setRating] = useState();

  useEffect(() => {
    setRating(getRandomInt(5));
  }, [])
  
  function getRandomInt(max){
      return Math.ceil(Math.random() * max);
  }

  return (
    <div className='comment'>
      <div className='comment--profile'>
        <img src={imageSrc} alt='user' />
        <div className="user">{user}</div>
        <Rating rating={rating}/>
      </div>
      <div className='comments--text'>{comment}</div>
    </div>
  )
}
