import React from 'react';
import './Chatscreen.css';
import {IoMdCall, IoMdAddCircle, IoMdPhotos} from 'react-icons/io';
import {BsFillCameraVideoFill, BsFileImage} from 'react-icons/bs';
import {AiOutlineFileGif, AiOutlineSend} from 'react-icons/ai';
import {useNavigate} from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState} from 'react';

const Chatscreen = () => {
    const [contentchat, setContentchat] = useState();
  const {chatId} = useParams();
  const {items}=useSelector(state=>state.chatscreen);
  const chatdetail = items.find(items => items.id == chatId);
  var chatarray=chatdetail.messages; 

 
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    var a = JSON.parse(localStorage.getItem('chat'+chatId))||chatarray;
    a=[...a,contentchat];
      console.log(a);

  localStorage.setItem('chat'+chatId, JSON.stringify(a));

  navigate(`/chatscreen/${chatId}`);
  };
  
    var b = JSON.parse(localStorage.getItem('chat'+chatId)) || chatarray;
    console.log(b);



 

// var b = JSON.parse(localStorage.getItem('chat'+chatId)) || chatarray;
  


    const navigate=useNavigate();
  const handleCloseChat=()=>{
    navigate("/");
  }
  return (
    <div className='chat-screen'>
        <div className='chat-screen-header'>
            <div className='chat-scrn-header-left'>
                <span className='chat-scrn-head-img'><img alt="img" src={chatdetail.image}/></span>
                <span className='chat-scrn-head-txt'><p className='fw'>{chatdetail.title}</p><p className='co'>Active 1h ago</p></span>
            </div>
            <div className='chat-scrn-header-right'>
                <div><IoMdCall/></div>
                <div><BsFillCameraVideoFill/></div>
                <button className='chat-screen-close' onClick={()=>handleCloseChat()}>x</button>
            </div>
        </div>

        <div className='chat-screen-body'>
           
      {b.map((chat)=>(
 <div className='sender'><p>{chat}</p></div>
 ))}
           
        </div>
        <div className='chat-screen-footer'>
            <div><IoMdAddCircle className='chat-scrn-foot-icons'/></div>
            <div><IoMdPhotos className='chat-scrn-foot-icons'/></div>
            <div><BsFileImage className='chat-scrn-foot-icons'/></div>
            <div><AiOutlineFileGif className='chat-scrn-foot-icons'/></div>
            <form onSubmit={handleSubmit} className="chat-form">
            <div><input type="text" className='chat-scrn-foot-input'  id="main-input" onChange={(e) => setContentchat(e.target.value)}/></div>
            <div><button className='btn-foot'><AiOutlineSend className='chat-scrn-foot-icons mn'/></button></div>
            </form>
        </div>
    </div>
  )
}

export default Chatscreen
