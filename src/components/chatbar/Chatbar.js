import React from 'react'
import './Chatbar.css'
import {BsThreeDots} from 'react-icons/bs';
import pro1 from '../../assets/profile_1.jpg';
import pro2 from '../../assets/profile_2.jpg';
import pro3 from '../../assets/profile_3.jpg';
import pro4 from '../../assets/profile_4.jpg';
import pro5 from '../../assets/profile_5.jpg';
import Chatscreen from '../chatscreen/Chatscreen';
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const Chatbar = () => {
  const {items,status}=useSelector(state=>state.chatscreen);
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
          <button onClick={()=>handleOpenChat(chats.id)} className='chat-contacts-wrap'><span className='chatbar-contacts-inner'><img className='chatbar-contacts-inner-img' src={chats.image}/></span><p>{chats.title}</p></button> 
        ))}
       

       {/* <button onClick={()=>handleOpenChat()} className='chat-contacts-wrap'><span className='chatbar-contacts-inner'><img className='chatbar-contacts-inner-img' src={pro2}/></span><p>Aleena Peter</p></button> 

       <button onClick={()=>handleOpenChat()} className='chat-contacts-wrap'><span className='chatbar-contacts-inner'><img className='chatbar-contacts-inner-img' src={pro3}/></span><p>Tom Russo</p></button> 

       <button onClick={()=>handleOpenChat()} className='chat-contacts-wrap'><span className='chatbar-contacts-inner'><img className='chatbar-contacts-inner-img' src={pro4}/></span><p>Mary Joy</p></button>

       <button onClick={()=>handleOpenChat()} className='chat-contacts-wrap'><span className='chatbar-contacts-inner'><img className='chatbar-contacts-inner-img' src={pro5}/></span><p>Joy Harley</p></button> */}
      </div>


    </div>
  )
}

export default Chatbar