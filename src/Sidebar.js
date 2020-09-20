import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return (
        <div classNamr="sidebar">
            <SidebarRow src="https://res.cloudinary.com/wired-de/iu/s--yMNYpryY--/c_fill,f_auto,g_auto,h_750,q_auto:good,w_1200/v1/0/GettyImages-500445690jpg.jpg" title= "Vitalik Buterin"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplaces"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreIcon} title="More"/>
        </div>
    )
}

export default Sidebar
