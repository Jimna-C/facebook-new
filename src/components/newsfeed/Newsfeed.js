import React from 'react';
import './Newsfeed.css';
import {FaGlobeAmericas, FaRegCommentAlt} from 'react-icons/fa';
import {BsThreeDots} from 'react-icons/bs';
import {RiShareForwardLine} from 'react-icons/ri';
import {AiOutlineLike} from 'react-icons/ai';
import fav from '../../assets/fav.svg';
import like from '../../assets/like.svg';
import {newsFeedData} from './data';
import { Navigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";

const Newsfeed = () => {

 const {items,status}=useSelector(state=>state.newsfeed);
 const navigate=useNavigate();
//  localStorage.setItem('newsfeeditems', JSON.stringify(items));
//  var l=  JSON.parse(localStorage.getItem('newsfeeditems')) || [];
//    console.log(l);

var arrays=[];
   const handleLike=(like,id,par)=> {
      const profile = JSON.parse(localStorage.getItem('newsfeeditems'))||items;
      var test = profile.find(profile => profile.id === id);
      if(test.par!=="liked"){
      var liked= test.like+1;
      const updated={...test,like:liked,par};
       console.log(updated.id);
       console.log(test.id);
      
      arrays=profile.filter((profile)=>profile.id!==id);
      
       arrays.push(updated);
       console.log(items);
       console.log(arrays);
       localStorage.setItem('newsfeeditems',JSON.stringify(arrays))
       navigate("/"); 
      }
      else{

      }
    
}

var l=  JSON.parse(localStorage.getItem('newsfeeditems')) || items;
// useEffect(() => {
//   // storing input name
// localStorage.setItem('newsfeeditems',JSON.stringify(l))
// }, [l]);

var arrayssec=[];
   const handleLikesec=(like,id,par)=> {
    const profile = JSON.parse(localStorage.getItem('test'));
    var test = profile.find(profile => profile.id === id);
    // console.log(parseInt(test.like));
    if(test.par!=="liked"){
    var liked= parseInt(test.like+1);
    const updated={...test,like:liked,par};
     
    
    arrayssec=profile.filter((profile)=>profile.id!==id);
    
    arrayssec.push(updated);
    
     localStorage.setItem('test',JSON.stringify(arrayssec))
     navigate("/");
    }
    else{

    }
}

//var h=  JSON.parse(localStorage.getItem('test')) || [];

var m=  JSON.parse(localStorage.getItem('test')) || [];



  return (
    <div >
      
      {l.map((feed)=>(
      <div className='newsfeed' key={feed.id}>
    <div className='feed-head'>
     <div className='feed-head-left'>
       <img src={feed.image}/>
       <div className='feed-head-left-inner'>
         <h3>{feed.title}</h3>
         <span className='feed-head-left-inner-det'><p>{feed.time}</p> <FaGlobeAmericas/></span>
       </div>
     </div>
     <div className='feed-head-right'>
       <BsThreeDots className='feed-head-right-img'/>
     </div>
    </div>
    <div className='feed-title'>
    <p>{feed.content}</p>
    </div>
 {feed.contentImage.length==0?"":<div className='feed-middle'>
     <img src={feed.contentImage}/>
    </div>}
  
 
    <div className='feed-last'>
     <div className='feed-last-fir'>
       <div className='feed-last-fir-inner1'>

       
       <span><img className='feed-last-fir-icons' src={like}/><img className='feed-last-fir-icons' src={fav}/><input type="text" value={feed.like}/></span>
      
       </div>
       <div className='feed-last-fir-inner2'>
       {feed.like.length==0 ? "": <span><p>{feed.comment}</p><FaRegCommentAlt className='feed-icon-comment'/></span>}

       {feed.share.length==0 ? "": <span><p>{feed.share}</p><RiShareForwardLine className='feed-icon-comment ds'/></span>}
      
       </div>
     </div>
     <div className='feed-last-sec'>
      <button className='feed-last-sec-inner' onClick={()=>handleLike(feed.like,feed.id,"liked")}><AiOutlineLike className={feed.par=="liked" ? "likep" : "feed-last-comm"} /><p className={feed.par=="liked" ? "likep" : ""} >Like</p></button>
      <div className='feed-last-sec-inner'><span className='feed-last-comm co'></span><p>Comment</p></div>
      <div className='feed-last-sec-inner'><span className='feed-last-comm sh'></span><p>Share</p></div>
     </div>
    </div>
    </div>
      ))}

{m.sort((a, b) => (a.id > b.id) ? 1 : -1).map((feed)=>(
      <div className='newsfeed' key={feed.id}>
    <div className='feed-head'>
     <div className='feed-head-left'>
       <img src={feed.image}/>
       <div className='feed-head-left-inner'>
         <h3>{feed.title}</h3>
         <span className='feed-head-left-inner-det'><p>{feed.time}</p> <FaGlobeAmericas/></span>
       </div>
     </div>
     <div className='feed-head-right'>
       <BsThreeDots className='feed-head-right-img'/>
     </div>
    </div>
    <div className='feed-title'>
    <p>{feed.content}</p>
    </div>
 {feed.contentImage.length==0?"":<div className='feed-middle'>
     <img src={feed.contentImage}/>
    </div>}
  
 
    <div className='feed-last'>
     <div className='feed-last-fir'>
       <div className='feed-last-fir-inner1'>

       
       <span><img className='feed-last-fir-icons' src={like}/><img className='feed-last-fir-icons' src={fav}/><input type="text" value={feed.like}/></span>
      
       </div>
       <div className='feed-last-fir-inner2'>
       {feed.like.length==0 ? "": <span><p>{feed.comment}</p><FaRegCommentAlt className='feed-icon-comment'/></span>}

       {feed.share.length==0 ? "": <span><p>{feed.share}</p><RiShareForwardLine className='feed-icon-comment ds'/></span>}
      
       </div>
     </div>
     <div className='feed-last-sec'>
      <button className='feed-last-sec-inner' onClick={()=>handleLikesec(feed.like,feed.id,"liked")}><AiOutlineLike className={feed.par=="liked" ? "likep" : "feed-last-comm"} /><p className={feed.par=="liked" ? "likep" : ""}>Like</p></button>
      <div className='feed-last-sec-inner'><span className='feed-last-comm co'></span><p>Comment</p></div>
      <div className='feed-last-sec-inner'><span className='feed-last-comm sh'></span><p>Share</p></div>
     </div>
    </div>
    </div>
      ))}


       </div>
       
  )
}

export default Newsfeed