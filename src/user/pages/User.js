import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Axios from "axios";

import Skills from "../../skills/pages/Skills";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const User = () => {
  const classes = useStyles();
  const [username, setUsername] = useState(null);
  const [skills, setSkills] = useState(null);

  const handleUsername = (e) => {
    if (!e.target.value.trim()) return;
    setUsername(e.target.value);
    //setMentors(null);
  };

  const getSkills = async (e) => {
    e.preventDefault();
    if (username) {
      try {
        const response = await Axios.get(
          `http://localhost:5000/api/${username}`
        );
        setSkills(response.data);
        console.log(skills); //watch
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <React.Fragment>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding={1}
      >
        <Paper m="auto" bgcolor="lightblue">
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={getSkills}
          >
            <TextField
              id="standard-basic"
              label="Username of Torre"
              name="username"
              onChange={handleUsername}
              autoFocus
            />
            <Button
              variant="contained"
              color="primary"
              name="username"
              type="submit"
            >
              Search
            </Button>
          </form>
        </Paper>
      </Box>
      {skills && <Skills skills={skills} />}
    </React.Fragment>
  );
};

export default User;
