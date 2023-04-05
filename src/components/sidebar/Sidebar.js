import React from 'react'
import './Sidebar.css';
import {FaUserFriends} from 'react-icons/fa';
import Icon from '../../assets/icon_2.png';
import Fav from '../../assets/icon_3.png';
import profileOri from '../../assets/profile_ori.jpg';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-wrap'>
      <span className='comm'><img className='profile-comm' src={profileOri}/></span><span className='fnt'>Jeneeta</span>
      </div>
      <div className='sidebar-wrap'>
        <span className='find_friend comm'></span><span className='fnt'>Find friends</span>
      </div>
      <div className='sidebar-wrap'>
        <span className='comm'><img src={Icon}/></span><span className='fnt'>Most recent</span>
      </div>
      <div className='sidebar-wrap'>
        <span className='grps comm'></span><span className='fnt'>Groups</span>
      </div>
      <div className='sidebar-wrap'>
        <span className='market-place comm'></span><span className='fnt'>Market place</span>
      </div>
      <div className='sidebar-wrap'>
        <span className='watch comm'></span><span className='fnt'>Watch</span>
      </div>
      <div className='sidebar-wrap'>
        <span className='memories comm'></span><span className='fnt'>Memories</span>
      </div>
      <div className='sidebar-wrap'>
        <span className='saved comm'></span><span className='fnt'>Saved</span>
      </div>
      <div className='sidebar-wrap'>
        <span className='pages comm'></span><span className='fnt'>Pages</span>
      </div>
      <div className='sidebar-wrap'>
        <span className='events comm'></span><span className='fnt'>Events</span>
      </div>
      <div className='sidebar-wrap'>
        <span className='comm'><img src={Fav}/></span><span className='fnt'>Favourites</span>
      </div>
    </div>
  )
}

export default Sidebar