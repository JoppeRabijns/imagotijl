import './background.css';
import video from '../../assets/websiteachtergrond.mp4';


function Background() {
  return(
    <video className='background' controls autoPlay loop>
        <source src={video} type='video/mp4' />
    </video>
  )
}

export default Background