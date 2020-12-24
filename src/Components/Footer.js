import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CallIcon from "@material-ui/icons/Call";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "35vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1D4E19",
  },
  footerContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "space-around",
    },
  },
  address: {
    width: "20vmax",
    height: "10vmax",
    margin: "50px",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
  },
  addressTitle: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  addressContent: {
    fontFamily: "Nunito",
    fontSize: "1rem",
    color: "#fff",
  },
  socialMedia: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "30vmax",
    height: "10vmax",
    borderLeft: "5px solid white",
    borderRight: "5px solid white",
    margin: "50px",
    [theme.breakpoints.down("md")]: {
      borderLeft: "none",
      borderRight: "none",
      borderTop: "5px solid white",
      borderBottom: "5px solid white",
    },
  },
  socialMediaIcon: {
    fontSize: "3rem",
    color: "#fff",
    "&:hover": {
      transition: "300ms",
      transform: "scale(1.2)",
    },
  },
  contact: {
    width: "20vmax",
    height: "10vmax",
    display: "flex",
    flexDirection: "column",
    margin: "50px",
    [theme.breakpoints.down("md")]: {
      marginTop: "-20px",
      width: "50%",
    },
  },
  contactTitle: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  contactContent: {
    fontFamily: "Nunito",
    fontSize: "1rem",
    color: "#fff",
  },
  contactInfo: {
    display: "flex",
    alignItems: "center",
  },
  contactInfoIcon: {
    marginRight: "20px",
  },
  copyRight: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "gray",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.footerContent}>
        <div className={classes.address}>
          <p className={classes.addressTitle}>Address</p>
          <p className={classes.addressContent}>
            No. 19, Muthamizh Street, Srinivasa Nagar, New Perungalathur, <br />{" "}
            Chennai - 600063.
          </p>
        </div>
        <div className={classes.socialMedia}>
          <FacebookIcon className={classes.socialMediaIcon} />
          <InstagramIcon className={classes.socialMediaIcon} />
          <YouTubeIcon className={classes.socialMediaIcon} />
          <TwitterIcon className={classes.socialMediaIcon} />
        </div>
        <div className={classes.contact}>
          <p className={classes.contactTitle}>Contact</p>
          <p className={classes.contactContent}>
            <p className={classes.contactInfo}>
              <MailOutlineIcon className={classes.contactInfoIcon} />
              farming@vivasayavelai.com
            </p>
            <p className={classes.contactInfo}>
              <CallIcon className={classes.contactInfoIcon} />
              +91-9750962781
            </p>
          </p>
        </div>
      </div>
      <div className={classes.copyRight}>
        Copyright © 2020 vivasayavelai.com. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
