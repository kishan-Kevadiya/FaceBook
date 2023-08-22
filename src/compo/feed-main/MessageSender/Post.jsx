import React from 'react'
import './post.css'
import {Avatar} from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import {ExpandMoreOutlined} from '@material-ui/icons'

const Post = ({profilePic,image,username,timestamp,message}) => {
  return (
    <div className='post'>
        <div className="post-top">
            <Avatar src={profilePic} className='post-avatar'/>
            <div className="posttop-info">
                <h3>{username}</h3>
                <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
        </div>
<div className="post-bottom">
    <p>{message}</p>
</div>

<div className="post-img">
    {image ? <img src={image} alt="post" /> : ''}
</div>

<div className="post-options">

    <div className="post-option">
        <ThumbUpIcon className='post-like'/>    
        <p>Like</p>
    </div>
    <div className="post-option">
        <ChatBubbleOutlineIcon className='post-comment'/>
        <p>Comment</p>
    </div>
    <div className="post-option">
        <NearMeIcon className='post-share'/>
        <p>Share</p>
    </div>
    <div className="post-option">
        <AccountCircleIcon />
        <ExpandMoreOutlined/>
    </div>

</div>

      

    </div>
  )
}

export default Post