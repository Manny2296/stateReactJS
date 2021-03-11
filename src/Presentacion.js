import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: "2%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "justify",
    color: theme.palette.text.secondary
  },
  title: {
    color: "rgb(45, 53, 76)"
  },
  subtitle: {
    color: "rgb(45, 53, 76)"
  }
}));
export default function Presentacion(props) {
  const classes = useStyles();
  return (
    <>
      <Avatar
        alt="Manuel Felipe"
        src="https://eco2.com.co/wp-content/uploads/2020/06/profilecv.png"
        className={classes.large}
      />

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography>
              <h4 className={classes.subtitle}>
                Formaçao e experiencia profissional
              </h4>
              <h6> * Engenheiro de Sistemas (Computaçao) | ECI - Co </h6>
              <h6>* Graduaçao Sandwich | UTC- Fr </h6>
              <h6>* Engenheiro de Desenvolvimento | Esqualearning - Fr </h6>
              <h6>* Especialiste de Software | Custom - Br </h6>
              <h6>* Consultor de TI | ECO2 - Co </h6>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography>
              <h4 className={classes.subtitle}>
                Formaçao e experiencia profissional
              </h4>
              <h6> * Engenheiro de Sistemas (Computaçao) | ECI - Co </h6>
              <h6>* Graduaçao Sandwich | UTC- Fr </h6>
              <h6>* Engenheiro de Desenvolvimento | Esqualearning - Fr </h6>
              <h6>* Especialiste de Software | Custom - Br </h6>
              <h6>* Consultor de TI | ECO2 - Co </h6>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
