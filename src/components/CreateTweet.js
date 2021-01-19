import React, { useState } from "react";
import TweetList from "./TweetList";

const CreateTweet = ({ details }) => {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput("welcome " + document.querySelector(".text").value);
  };
  return (
    <div className="create-tweet">
      <textarea className="text" cols="30" rows="10"></textarea>
      <button onClick={changeHandler}> submit</button>
      <h1>{input}</h1>
      <TweetList details={details} />
    </div>
  );
};

export default CreateTweet;
