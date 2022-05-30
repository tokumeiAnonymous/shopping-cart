import imageSrc from '../Assets/blank-profile.png';
import './Comment.css';

export default function Comment({ user, comment }) {
  /*
      const userSprites = [
          'male', 'female', 'human', 
          'identicon', 'initials', 'bottts',
          'avataaars', 'jdenticon', 'gridy',
          'micah'
      ];
  
      const random = getRandomInt(userSprites.length);
      const sprites = userSprites[random];
  
      function getRandomInt(max){
  
          return Math.floor(Math.random() * max);
      }
  */
  return (
    <div className='comment'>
      <div className='comment--profile'>
        <img src={imageSrc} alt='user' />
        <div className="user">{user}</div>
      </div>
      <div className='comments--text'>{comment}</div>
    </div>
  )
}
