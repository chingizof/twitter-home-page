import React from 'react';
import IconTwitter from "../../icons/twitter-icon"
import IconHashtag from "../../icons/hashtag"
import IconNotifications from "../../icons/notifications"
import IconHome from "../../icons/home"
import IconMessages from "../../icons/messages"
import IconProfile from "../../icons/profile"
import IconMore from "../../icons/more"

import "./styles.css"

const SideBar = () => {
    return (
        <div className="sidebar-wrapper">
            <div className="sidebar-item">
                <div className="icon-wrapper">
                    <IconTwitter />
                </div>
            </div>
            <div className ="sidebar-item">
                <div className="icon-wrapper">
                    <IconHome />
                </div>
            </div>
            <div className ="sidebar-item">
                <div className="icon-wrapper">
                    <IconHashtag />
                </div>
            </div>
            <div className ="sidebar-item">
                <div className="icon-wrapper">
                    <IconNotifications />
                </div>
            </div>
            <div className ="sidebar-item">
                <div className="icon-wrapper">
                    <IconMessages />
                </div>
            </div>
            <div className ="sidebar-item">
                <div className="icon-wrapper">
                    <IconProfile />
                </div>
            </div>
            <div className ="sidebar-item">
                <div className="icon-wrapper">
                    <IconMore />
                </div>
            </div>
        </div>
    )
}

export default SideBar;