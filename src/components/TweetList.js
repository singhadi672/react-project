import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ details }) => {
  return (
    <div className="tweet-list">
      <Tweet details={details.name1} />
      <Tweet details={details.name2} />
      <Tweet details={details.name3} />
    </div>
  );
};

export default TweetList;
