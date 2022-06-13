import React from "react";
import "./styles.css"
import cat from "../../img/cat.jpg"

const TweetList = () => {
    const array = [{
        AccountName: "Nurbek",
        tweet: "Hello Chingiz",
        commentNumber: 1,
        retweetNumber: 30,
        likeNumber: 22,
    },
    {
        AccountName: "Fazil",
        tweet: "Hello Nurbek",
        commentNumber: 4,
        retweetNumber: 11,
        likeNumber: 42,
    },
    {
        AccountName: "Alibi",
        tweet: "Hello Fazil",
        commentNumber: 5,
        retweetNumber: 3,
        likeNumber: 523532,
    },
    {
        AccountName: "Doha",
        tweet: "Hello Alibi",
        commentNumber: 124,
        retweetNumber: 3432,
        likeNumber: 2,
    }]
    return (
        <div className="tweet-list-wrapper">
            {array.map((tweet) => (
                <div className="tweet-box">
                    <div className="user-image">
                      <img src={cat} />
                    </div>
                    <div className="tweet-content">
                        <div>{tweet.AccountName}</div>
                        <div>{tweet.tweet}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TweetList