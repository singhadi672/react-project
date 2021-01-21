import React, { useState } from "react";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  const details = {
    name1: "Aditya Singh",
    name2: "admin",
    name3: "Dev ed",
  };

  const [input, setInput] = useState("");
  const [tweets, setTweets] = useState([]);

  return (
    <div>
      <h1>Hello React</h1>
      <CreateTweet
        details={details}
        input={input}
        setInput={setInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList
        details={details}
        input={input}
        setInput={setInput}
        tweets={tweets}
        setTweets={setTweets}
      />
    </div>
  );
}

export default App;
