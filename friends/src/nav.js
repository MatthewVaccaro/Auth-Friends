import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/friends">Friends List</Link>
      <Link to="/">Login</Link>
    </nav>
  );
};

export default Nav;
