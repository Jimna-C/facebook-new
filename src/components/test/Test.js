import React from 'react';
import './Test.css';
import { useState,useEffect } from 'react';
import logo from '../../assets/icons/Logo.png';
import theme from '../../assets/icons/theme.svg';
import smile from '../../assets/icons/smile.svg';
import gallery from '../../assets/icons/gallery.svg';
import tag from '../../assets/icons/tag.svg';
import emoji from '../../assets/icons/emoji.svg';
import mic from '../../assets/icons/mic.svg';
import more from '../../assets/icons/more.svg';
import {useNavigate} from "react-router-dom";
import profileOri from '../../assets/profile_ori.jpg';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/newsfeedSlice';

const Test = () => {
  const [entries, setEntries] = useState([]);
  const [content, setContent] = useState();
  const [selectedImage, setSelectedImage] = useState([]);
 
  const navigate=useNavigate();
  var a=[];
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
   
    const newEntries = [];
    // for (const [name, value] of formData) {
    //  console.log(URL.createObjectURL([]));
      // {selectedImage ? URL.createObjectURL(selectedImage) : ""}
      a.push({
      content:content,
      id:Date.now(),
      title:"Jeneeta",
      image:profileOri,
      contentImage:selectedImage,
      like:'',
      comment:'',
      share:'',
      time:"1m",
      par:""
      });
      
    // }
    // setEntries(newEntries);
    // console.log(newEntries);
  // a.push(newEntries);

  localStorage.setItem('test', JSON.stringify(a));
    navigate("/");
  };


   a = JSON.parse(localStorage.getItem('test')) || [];

  const handleCreatePostClose=()=>{
    navigate("/");
  }
  return (
    <div>
         <div className="main-post-wrap">
    <div className="container">
      <div className="wrapper">
        <section className="post">
          <header><p>Create Post</p><button onClick={()=>handleCreatePostClose()}>x</button></header>
          <form class="entryForm"
        onSubmit={handleSubmit}>
            <div className="content">
              <img src={profileOri} alt="logo"/>
              <div className="details">
                <p>Jeneeta</p>
                <div className="privacy">
                  <i className="fas fa-user-friends"></i>
                  <span>Friends</span>
                  <i className="fas fa-caret-down"></i>
                </div>
              </div>
            </div>
            <textarea placeholder="What's on your mind, Jeneeta?" name="content" required  onChange={(e) => setContent(e.target.value)}></textarea>
            <div className="theme-emoji">
              <img src={theme} alt="theme"/>
              <img src={smile} alt="smile"/>
            </div>
            <div className="options">
              <p>Add to Your Post</p>
              <ul className="list">
              
                <li><label><img src={gallery} alt="gallery"/><input type="file" name="contentImage" id="file-input" onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(URL.createObjectURL(event.target.files[0]));
        }}/></label></li>
                
                <li><img src={tag} alt="gallery"/></li>
                <li><img src={emoji} alt="gallery"/></li>
                <li><img src={mic} alt="gallery"/></li>
                <li><img src={more} alt="gallery"/></li>
              </ul>
            </div>
            <button >Post</button>
          </form>
        </section>
        
      </div>
    </div>
  </div>
    </div>
  )
}

export default Test