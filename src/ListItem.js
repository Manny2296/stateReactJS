import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
//import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import "./styles.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import ListItemIcon from "@material-ui/core/ListItemIcon";
//import Router from "next/router";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    //maxWidth: "36ch",
    alignItems: "center",

    alignSelf: "center",
    color: "rgb(45, 53, 76);",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export default function AlignItemsList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openstatefull, setOpenstatefull] = React.useState(false);
  const [openstateless, setOpenstateless] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickstatefull = () => {
    setOpenstatefull(!openstatefull);
  };
  const handleClickstateless = () => {
    setOpenstateless(!openstateless);
  };
  console.log("Mis List pro" + JSON.stringify(props));
  return (
    <div>
      <List className={classes.root}>
        <>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <Avatar alt="">1</Avatar>
            </ListItemIcon>
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography variant="subtitle1" align="center">
                    Presentaçao
                  </Typography>
                </React.Fragment>
              }
            />

            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleClickstatefull}>
            <ListItemIcon>
              <Avatar alt="">2</Avatar>
            </ListItemIcon>
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography variant="subtitle1" align="center">
                    Statefull Components
                  </Typography>
                </React.Fragment>
              }
            />

            {openstatefull ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openstatefull} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={handleClickstateless}>
            <ListItemIcon>
              <Avatar alt="">3</Avatar>
            </ListItemIcon>
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography variant="subtitle1" align="center">
                    StateLess Components
                  </Typography>
                </React.Fragment>
              }
            />

            {openstateless ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openstateless} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
            </List>
          </Collapse>
        </>
      </List>
    </div>
  );
}
