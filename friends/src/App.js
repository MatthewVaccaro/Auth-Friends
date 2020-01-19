import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";

import Login from "./login";
import PeopleList from "./peopleList";
import Nav from "./nav";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Route exact path="/" component={Login} />
        <ProtectedRoute exact path="/Friends" component={PeopleList} />
      </Router>
    </div>
  );
}

export default App;
