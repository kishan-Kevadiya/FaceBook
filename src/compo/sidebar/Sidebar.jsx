import React from 'react'
import './sidebar.css'
import Row from './Row'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import {ExpandMoreOutlined} from '@material-ui/icons';
import { useStateValue } from '../../provider/stateProvider'



const Sidebar = () => {
  const [{user},dispatch] = useStateValue()
  return (
    <div className='sidebar'>
        <Row tittle={user.displayName} src={user.photoURL}/>
        <Row tittle='COVID-19 Information Center' Icon={LocalHospitalIcon}/>
        <Row tittle='Pages' Icon={EmojiFlagsIcon}/>
        <Row tittle='Friends' Icon={PeopleIcon}/>
        <Row tittle='Messenger' Icon={ChatIcon}/>
        <Row tittle='MarketPlace' Icon={StorefrontIcon}/>
        <Row tittle='Videos' Icon={VideoLibraryIcon}/>
        <Row tittle='MarketPlace' Icon={ExpandMoreOutlined}/>
        
    </div>
  )
}

export default Sidebar