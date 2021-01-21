import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ details, input, setInput, tweets, setTweets }) => {
  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <Tweet
          input={input}
          setInput={setInput}
          tweet={tweet}
          tweets={tweets}
          setTweets={setTweets}
          details={details.name1}
        />
      ))}
    </div>
  );
};

export default TweetList;
