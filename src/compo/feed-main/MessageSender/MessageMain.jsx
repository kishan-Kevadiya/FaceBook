import React, { useState } from 'react'
import './msg.css'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon'
import { useStateValue } from '../../../provider/stateProvider'
import db from '../../../firebase'
import {firebase} from '../../../firebase'
import {Toaster , toast} from 'react-hot-toast'
import posted from '../../../sound/posted.mp3'
 
const MessageMain = () => {
  const [{user},dispatch] = useStateValue()

const [input,setInput] = useState('')
const [imgurl,setImgurl] = useState('')

let handleSubmit = (e) => {
    e.preventDefault();

db.collection('posts').add({
  message:input,
  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  profilePic: user.photoURL,
  username:user.displayName,
  image:imgurl,
})

new Audio(posted).play();
    setInput('');
    setImgurl('');

    toast.success('Your Post Has Been Posted Succesfully!')
}


  return (
    <div className='messagesender'>

<div className="messageSender-top">
    <Avatar src={user.photoURL} />
    <form>
        <div className="msg-inp">
        <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
         placeholder={`Hey ${user.displayName} 🙋 Write Here To Post?`} className='messageSender-input' />

        <input
        value={imgurl}
        onChange={(e)=>setImgurl(e.target.value)}
        placeholder='Image Url (Optional)' />
        </div>

<button onClick={handleSubmit} type="Submit" className='msg-button' > POST</button>
<Toaster/>

    </form>
</div>








<div className="messageSender-bottom">

<div className="messageSender-option">
<VideocamIcon style={{color:'red'}}/>
<h3>Live Video</h3>
</div>
<div className="messageSender-option">
<PhotoLibraryIcon style={{color:'green'}}/>
<h3>Photo/Video</h3>
</div>
<div className="messageSender-option">
<InsertEmotionIcon style={{color:'orange'}}/>
<h3>Fellings/Activity</h3>
</div>




</div>

    </div>
  )
}

export default MessageMain