import React, { useEffect, useState } from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircle from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from '../provider/stateProvider';
import login from '../sound/login.mp3'

const Header = () => {

  const [{ user }, dispatch] = useStateValue();

useEffect(() => {

  new Audio(login).play();


}, [{user}])
  return (
    <div className='header'>

                           <div className="header-left">
            
              
        <img src='https://tse1.mm.bing.net/th?id=OIP.Ua5AXhtGRgPuisZVmetclQHaFL&pid=Api&rs=1&c=1&qlt=95&w=150&h=105' alt='Facebook' />
        


        <div className='header-input'>
          <SearchIcon />
          <input type='text' placeholder='Search Facebook' />
        </div>

                            </div>

                            <div className="header-middle">

<div className='header-option h-option-active'>
  <HomeIcon fontSize='large' />
</div>
<div className='header-option'>
  <FlagIcon fontSize='large' />
</div>
<div className='header-option'>
  <SubscriptionsOutlinedIcon fontSize='large' />
</div>
<div className='header-option'>
  <StorefrontOutlinedIcon fontSize='large' />
</div>
<div className='header-option'>
  <SupervisedUserCircle fontSize='large' />
</div>

        </div>




                   <div className="header-right">
        <div className="header-info">
          <Avatar src={user.photoURL} className='r-avatar'/>
          <h4 className='r-name'>{user.displayName}</h4>
        </div>
      


   {/* <div className="header-last-icons"> */}
   <IconButton>
        <AddIcon />
      </IconButton>
      <IconButton>
        <ForumIcon />
      </IconButton>
      <IconButton>
        <NotificationsActiveIcon />
      </IconButton>
      <IconButton>
        <ExpandMoreIcon />
      </IconButton>
   {/* </div> */}
                    </div>


    </div>
  )
}

export default Header