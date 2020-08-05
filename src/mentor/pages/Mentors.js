import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
//import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const CardComplex = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper variant="outlined" className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="Avatar" src={props.picture} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.username}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {props.professionalHeadline}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => {
                      const URL = `https://torre.co/en/messenger/conversations/${props.id}`;
                      window.open(URL, "_blank");
                    }}
                  >
                    Say Hi!
                  </Button>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="caption" align="right">
                {props.locationName}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

const Mentors = (props) => {
  return (
    <React.Fragment>
      {/* <Container maxWidth="lg"> */}
      <Grid container spacing={3}>
        {props.mentors &&
          props.mentors.map((mentor) => {
            return (
              /*<li key={mentor.subjectId} id={mentor.subjectId}>
                {mentor.username}
              </li> */

              <Grid
                item
                xs={3}
                sm={3}
                key={mentor.subjectId}
                id={mentor.subjectId}
              >
                <CardComplex
                  username={mentor.username}
                  name={mentor.name}
                  picture={mentor.picture}
                  professionalHeadline={mentor.professionalHeadline}
                  id={mentor.subjectId}
                  locationName={mentor.locationName}
                />
              </Grid>
            );
          })}
      </Grid>
      {/* </Container> */}
    </React.Fragment>
  );
};

export default Mentors;
