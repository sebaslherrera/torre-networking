import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Axios from "axios";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

import Mentors from "../../mentor/pages/Mentors";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(5),
      width: "150ch",
    },
  },
}));

const Skills = (props) => {
  const classes = useStyles();
  const [mentors, setMentors] = useState(null);

  const getMentors = async (e) => {
    e.preventDefault();
    const skill = e.currentTarget.value;
    if (skill) {
      try {
        const response = await Axios.get(
          `http://ec2-54-90-206-133.compute-1.amazonaws.com:5000/api/mentor/${skill}`
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
        mb={5}
      >
        <Paper
          m="auto"
          bgcolor="lightblue"
          variant="outlined"
          className={classes.root}
        >
          <Container>
            <Typography variant="h4" color="textPrimary" align="center" mb={5}>
              Choose a specific field and get mentorship from the most skilled
              talents
            </Typography>
            <Grid container spacing={3}>
              {props.skills &&
                props.skills.map((skill) => {
                  return (
                    <Grid item xs={3} sm={3} xl={3} key={skill.id}>
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
        </Paper>
      </Box>
      <Mentors mentors={mentors} />
    </React.Fragment>
  );
};

export default Skills;
