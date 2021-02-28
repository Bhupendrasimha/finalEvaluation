import React from "react";

import { Avatar, Drawer } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Pagination from "../parts/pagination";
import { deepPurple } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "../parts/Searchbar";
import { fade, makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[800],
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  AvatarCenter: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing(5, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));
function Dashboard(props) {
  const classes = useStyles();
  const userData = useSelector((state) => state.userDetails);
  console.log(userData);
  const history = useHistory();
  const handleRouteChange = (to) => {
    history.push(to);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Tution Students Records
          </Typography>
          <SearchBar />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.AvatarCenter}>
          <Avatar className={classes.purple}>AD</Avatar>
          <Typography variant="h6">Admin </Typography>
          <Typography variant="subtitle1"> Tutor </Typography>
        </div>
        <Divider />

        <List>
          <ListItemIcon></ListItemIcon>
          <ListItemText />
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/*data to displayed*/}
        {props.children}
        <Pagination />
        <Typography paragraph></Typography>
      </main>
    </div>
  );
}
export default Dashboard;
