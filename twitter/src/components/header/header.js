import React from "react";
import "./styles.css"
import IconPopularTweets from "../../icons/popular-tweets"

const Header = () => {
    return (
        <div>
            <div className="header-wrapper">
                <div className="header-row">
                    <div>Главная</div>
                    <div className ="popular-tweet-icon">
                        <IconPopularTweets />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header