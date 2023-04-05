import React from 'react';
import './Test.css';
import { useState } from 'react';
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

  const [content, setContent] = useState();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    var i=4;
    const handleAddToCart=(content)=>{
      var contents={content,id:i++,title:"Jeneeta",image:profileOri,contentImage:"",like:"",comment:"",share:"",time:"1m"}
      console.log(contents);
    //   var a = [];
    //   a.push(contents);
    //   localStorage.setItem('test', JSON.stringify(a));
    // a = JSON.parse(localStorage.getItem('test'));
    //   console.log(a);
      dispatch(addToCart(contents));
 
      navigate("/");
    }
    const handleCreatePostClose=()=>{
      navigate("/");
    }
   
    // const handleSubmit = (e) => {
    //     navigate('/', {state: {content,id:"4",title:"Jeneeta",image:profileOri,contentImage:"",like:"",comment:"",share:"",time:"1m"}}
    //     )};
   
  return (
    <div>
         <div className="main-post-wrap">
    <div className="container">
      <div className="wrapper">
        <section className="post">
          <header><p>Create Post</p><button onClick={()=>handleCreatePostClose()}>x</button></header>
          <form >
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
            <textarea placeholder="What's on your mind, Jeneeta?" name="content" spellcheck="false" required onChange={(e) => setContent(e.target.value)}></textarea>
            <div className="theme-emoji">
              <img src={theme} alt="theme"/>
              <img src={smile} alt="smile"/>
            </div>
            <div className="options">
              <p>Add to Your Post</p>
              <ul className="list">
                <li><img src={gallery} alt="gallery"/></li>
                <li><img src={tag} alt="gallery"/></li>
                <li><img src={emoji} alt="gallery"/></li>
                <li><img src={mic} alt="gallery"/></li>
                <li><img src={more} alt="gallery"/></li>
              </ul>
            </div>
            <button onClick={()=>handleAddToCart(content)}>Post</button>
          </form>
        </section>
        
      </div>
    </div>
  </div>
    </div>
  )
}

export default Test