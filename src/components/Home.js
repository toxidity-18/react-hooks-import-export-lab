import React from "react";

 export function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
      <img src={image} alt="user image"/>
    </div>
  );
}
export default Home;