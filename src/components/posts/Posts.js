import React from 'react'
import './Posts.css';
import Stories  from '../stories/Stories';
import profileOri from '../../assets/profile_ori.jpg';
import live from '../../assets/live.png';
import photo from '../../assets/photo.png';
import feeling from '../../assets/feeling.png';
import Newsfeed from '../newsfeed/Newsfeed';
import {useNavigate} from "react-router-dom";


const Posts = () => {
  const navigate=useNavigate();
  const handleCreatePost=()=>{
    navigate("/create");
  }
  //console.log(newsFeedData);
  return (
    <div className='posts'>
      <Stories/>
      <div className='posts-mind'>
         <div className='posts-min-fir'>
          <img alt="vision" src={profileOri}/>
          <input type="text" name="post" placeholder="What's on your mind , Jeneeta?" onClick={()=>handleCreatePost()}/>
         </div>
         <div className='posts-min-sec'>
            <div className='posts-sec-inner'>
              <img alt="vision" src={live}/><span>Live Video</span>
            </div>
            <div >
              <button className='posts-sec-inner' onClick={()=>handleCreatePost()}><img alt="vision" src={photo}/><span>Photo/video</span></button>
            </div>
            <div className='posts-sec-inner'>
              <img alt="vision" src={feeling}/><span>Feeling/activity</span>
            </div>
         </div>
      </div>
      {/* <Test/> */}
       <Newsfeed/>
      
      
    </div>
  )
}

export default Posts