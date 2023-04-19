import React from 'react'
import './Chatbar.css'
import {BsThreeDots} from 'react-icons/bs';
import {useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';

const Chatbar = () => {
  const {items}=useSelector(state=>state.chatscreen);
  console.log(items);
  const navigate=useNavigate();
  const handleOpenChat=(id)=>{
    navigate(`/chatscreen/${id}`);
    
  }
  return (
    <div className='chatbar'>
      <div className='chatbar-header'>
        <span>Contacts</span>
       <span><BsThreeDots/></span>
      </div>
      <div className='chatbar-contacts'>
        {items.map((chats)=>(
          <button onClick={()=>handleOpenChat(chats.id)} className='chat-contacts-wrap'><span className='chatbar-contacts-inner'><img alt="vision" className='chatbar-contacts-inner-img' src={chats.image}/></span><p>{chats.title}</p></button> 
        ))}
       
      </div>


    </div>
  )
}

export default Chatbar