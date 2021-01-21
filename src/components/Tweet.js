import React from "react";

const Tweet = ({ details, input, setInput, tweet, setTweets, tweets }) => {
  const deleteHandler = () => {
    setTweets(tweets.filter((item) => item !== tweet));
  };

  return (
    <div className="tweet">
      <h1>Name : {details}</h1>
      <p>{tweet}</p>
      <button onClick={deleteHandler}>Delete</button>
      <button>like</button>
    </div>
  );
};

export default Tweet;
