import React from 'react'
import './row.css'
import { Avatar } from '@material-ui/core';

const Row = ({src,Icon,tittle}) => {
  return (
    <div className='row'>
      {src && <Avatar src={src}/>}
    {Icon && <Icon/>}
    <h4>{tittle}</h4>
    
    
    </div>
  )
} 

export default Row;