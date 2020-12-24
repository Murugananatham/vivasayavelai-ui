import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  appbar: {
    margin: "1%",
    background: "none",
    [theme.breakpoints.down("md")]: {
      margin: "0%",
      background: "#696969",
    },
  },
  appbarWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  appbarTitle: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
    flexGrow: "1",
  },
  colorText: {
    color: "#5AFF3D",
  },
  container: {
    paddingTop: "20%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    width: "77%",
    marginLeft: "10%",
    [theme.breakpoints.down("md")]: {
      paddingTop: "80%",
    },
  },
  title: {
    color: "#fff",
    fontSize: "3rem",
    paddingLeft: "2%",
    borderLeft: "10px solid #5AFF3D",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
  },
  subTitle: {
    color: "#fff",
    fontSize: "1.5rem",
    paddingLeft: "2%",
    borderLeft: "10px solid #5AFF3D",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.75rem",
    },
  },
  goDown: {
    color: "#5AFF3D",
    fontSize: "4rem",
  },
  showMore: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
          <h1 className={classes.appbarTitle}>
            <span className={classes.colorText}>VivasayaVelai.com</span>
          </h1>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Finest Resources for Part-Time Farming
          </h1>
          <h1 className={classes.subTitle}>
            Partnering with Farmers for Land, Seeds, Experienced Farmer
            Assistant and Door-Step Delivery at 2 times per week with 10-15
            varieties of vegetables.
          </h1>
        </div>
        <div className={classes.showMore}>
          <Scroll to="services" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}

export default Header;
