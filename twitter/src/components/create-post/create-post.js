import React from "react";
import "./styles.css"
import profileImage from "../../img/cat.jpg"

const CreatePost = () => {
    return (
        <div className = "create-post-wrapper">
            <div className="input-wrapper">
                <img src={profileImage} width={24} height={24} className="profile-image" />
                <input type="text" placeholder="Что происходит?"/>
            </div>
                <button className="post-button">Твитнуть</button>
        </div>
    )
}

export default CreatePost