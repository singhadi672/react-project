import React from "react";

const Tweet = ({ details }) => {
  return (
    <div className="tweet">
      <h1>Name : {details}</h1>
      <p>this some bullshit dawg!</p>
      <button>Submit</button>
      <button>like</button>
    </div>
  );
};

export default Tweet;
