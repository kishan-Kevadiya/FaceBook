import React, { useEffect, useState } from 'react'
import './feed.css'
import StoryReel from './StoryReel.jsx';
import MessageMain from './MessageSender/MessageMain';
import Post from './MessageSender/Post';
import db from '../../firebase'

const Feed = () => {
const [posts,setPost] = useState([]);

useEffect(()=>{
  db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot)=>(
    setPost(snapshot.docs.map(doc=>({id: doc.id,data:doc.data()})))
  ))
})

  return (
    <div className='feed'>
    <StoryReel/>
    <MessageMain/>
    

{
  posts.map((post)=>(
    <Post 
    key={post.id}
    profilePic={post.data.profilePic}
    message={post.data.message}
    timestamp={post.data.timestamp}
    username={post.data.username}
    image={post.data.image}
    />
  ))
}


    
    </div>
  )
}

export default Feed