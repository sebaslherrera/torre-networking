import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

import User from "./user/pages/User";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <AppBar style={{ backgroundColor: "#27292D" }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Torre Networking
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
      <main>
        <Switch>
          <Route path="/" exact>
            <User />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
