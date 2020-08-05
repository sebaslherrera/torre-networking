import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Axios from "axios";

import Mentors from "../../mentor/pages/Mentors";

const Skills = (props) => {
  const [mentors, setMentors] = useState(null);

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
      <Container fixed>
        <Grid container spacing={3}>
          {props.skills &&
            props.skills.map((skill) => {
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

      <Mentors mentors={mentors} />
    </React.Fragment>
  );
};

export default Skills;
