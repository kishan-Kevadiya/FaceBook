import React from 'react'
import './reel.css'
import {Avatar} from '@material-ui/core'


const Reel = ({img,profSrc,tittle}) => {
 
  return (
    <div style={{ backgroundImage: `url(${img})` }} className='reel'>
        <Avatar src={profSrc} className='reel-avatar'/>
        <h4>{tittle}</h4>
    </div>
  )
}

export default Reel