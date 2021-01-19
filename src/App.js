import React from "react";
import CreateTweet from "./components/CreateTweet";

function App() {
  const details = {
    name1: "Aditya Singh",
    name2: "admin",
    name3: "Dev ed",
  };

  return (
    <div>
      <h1>Hello React</h1>
      <CreateTweet details={details} />
    </div>
  );
}

export default App;
