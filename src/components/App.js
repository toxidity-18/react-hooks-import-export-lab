import React from "react";
import NavBar from "../components/NavBar.js";
import Home from "../components/Home.js";
import About from "../components/About.js";
import{username,city,image} from "../data/user.js";

function App() {
  return (
    <div>
      <NavBar />
      <Home {...{username,city,image}} />
      <About {...{image}} />
    </div>
  );
}

export default App;
