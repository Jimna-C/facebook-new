import React from 'react';
import './Stories.css';
import profileOri from '../../assets/profile_ori.jpg';
import {GrAdd} from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';


const Stories = () => {
  const {items,status}=useSelector(state=>state.chatscreen);
  const selected=items.filter((items) => items.storyImage != "");
  console.log(selected);
  return (
    <div className='posts-story-wrap'>
    <div className='posts-stories'><img className='posts-stories-img' src={profileOri}/><span className='posts-stories-inner'><GrAdd  className='posts-stories-img-inner'/></span><p>Add to story</p></div>
    {selected.map((selected)=>(
    <div className='posts-stories'><img src={selected.storyImage} className='posts-stories-img'/><span className='posts-stories-inner'><img src={selected.image} className='posts-stories-img-inner'/></span><p>{selected.title}</p></div>
    ))}
    </div>
  )
}

export default Stories