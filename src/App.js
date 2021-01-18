import React from "react";
import TweetList from "./components/TweetList";

function App() {
  const details = {
    name1: "Aditya Singh",
    name2: "admin",
    name3: "Dev ed",
  };

  const aa = 11;
  const bb = 21;
  return (
    <div>
      <h1>Hello React</h1>
      <TweetList details={details} />
      <TweetList details={details} />
      <TweetList details={details} />
    </div>
  );
}

export default App;
