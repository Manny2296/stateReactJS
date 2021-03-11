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
    marginLeft: "40%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  title: {
    color: "rgb(45, 53, 76)"
  },
  subtitle: {
    color: "rgb(45, 53, 76)"
  }
}));
export default function StateLessComponent(props) {
  // const classes = useStyles();
  return (
    <>
      <img
        src="https://eco2.com.co/wp-content/uploads/2020/06/stateless1.jpg"
        className="img-statefull"
        alt="logo"
      />
      <Typography>
        <Typography align="justify">
          * Recebe as <span style={{ color: "rgb(45, 197, 250)" }}>props</span>{" "}
          como argumento <br />
        </Typography>
        <Typography align="justify">
          * Nao tem <span style={{ color: "rgb(45, 197, 250)" }}>estado</span>
        </Typography>
        <Typography align="justify">
          * Nao usa{" "}
          <span style={{ color: "rgb(45, 197, 250)" }}>Lifecycle Methods </span>
        </Typography>
        <Typography align="justify">* Usado sempre que possivel</Typography>
      </Typography>
    </>
  );
}
