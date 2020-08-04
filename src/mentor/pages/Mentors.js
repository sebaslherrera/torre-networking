import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
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
  const classes = useStyles();
  const [username, setUsername] = useState(null);
  const [skills, setSkills] = useState(null);
  const [mentors, setMentors] = useState(null);

  const handleUsername = (e) => {
    if (!e.target.value.trim()) return;
    setUsername(e.target.value);
    setMentors(null);
  };

  const getSkills = async (e) => {
    e.preventDefault();
    if (username) {
      try {
        const response = await Axios.get(
          `http://localhost:5000/api/${username}`
        );
        setSkills(response.data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const getMentors = async (e) => {
    e.preventDefault();
    const skill = e.currentTarget.value;
    if (skill) {
      try {
        const response = await Axios.get(
          `http://localhost:5000/api/mentor/${skill}`
        );
        setMentors(response.data);
        console.log(response.data);
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
      <Container fixed>
        <Grid container spacing={3}>
          {skills &&
            skills.map((skill) => {
              return (
                <Grid item xs={3} sm={3} key={skill.id}>
                  <Button
                    size="medium"
                    color="primary"
                    variant="outlined"
                    onClick={getMentors}
                    value={skill.name}
                  >
                    {skill.name}
                  </Button>
                </Grid>
              );
            })}
        </Grid>
      </Container>
      <div>
        {mentors &&
          mentors.map((mentor) => {
            return (
              <li key={mentor.subjectId} id={mentor.subjectId}>
                {mentor.username}
              </li>
            );
          })}
      </div>
    </React.Fragment>
  );
};

export default Mentors;
