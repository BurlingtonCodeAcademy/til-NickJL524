//imports
import React from "react";
import { Link } from "react-router-dom";

//navigation 
export default function NavBar() {
  return (
    <div id="navBar-container">
      <Link id="navBar-links" to={"/"}>
        Home
      </Link>
      <Link id="navBar-links" to={"/Post"}>
        Post
      </Link>
      <Link id="navBar-links" to={"/Facts"}>
        Facts
      </Link>
    </div>
  );
}
