import React, { useState } from "react";
import TweetList from "./TweetList";

const CreateTweet = ({ details, input, setInput, tweets, setTweets }) => {
  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitButtonHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, input]);
    setInput("");
  };

  return (
    <form className="create-tweet" onSubmit={submitButtonHandler}>
      <textarea
        value={input}
        className="text"
        cols="30"
        rows="10"
        onChange={changeHandler}
      ></textarea>
      <button>submit</button>
    </form>
  );
};

export default CreateTweet;
