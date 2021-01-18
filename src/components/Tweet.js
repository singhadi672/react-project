import React from "react";

const Tweet = ({ details }) => {
  return (
    <div className="tweet">
      <h1>Name : {details}</h1>
      <textarea cols="50" rows="10"></textarea>
      <button>Submit</button>
    </div>
  );
};

export default Tweet;
