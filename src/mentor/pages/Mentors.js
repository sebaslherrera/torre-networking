import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Mentors = () => {
  const [username, setUsername] = useState(null);
  const classes = useStyles();

  const handleUsername = (e) => {
    if (!e.target.value.trim()) return;
    setUsername(e.target.value);
  };

  const getMentors = async (e) => {
    e.preventDefault();
    if (username) {
      try {
        const response = await Axios.get(
          `http://localhost:5000/api/${username}`
        );
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={getMentors}
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
        // onClick={getMentors}
      >
        Search
      </Button>
    </form>
  );
};

export default Mentors;
