import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";

import Mentors from "./mentor/pages/Mentors";

function App() {
  return (
    <Router>
      {/* <MainNavigation /> */}
      <main>
        <Switch>
          <Route path="/" exact>
            <Mentors />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
