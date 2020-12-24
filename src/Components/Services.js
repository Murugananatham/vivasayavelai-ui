import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ServiceCard from "./ServiceCard";
import services from "../static/services";
import useWindowPosition from "../hook/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D4E19",
    paddingTop: "4%",
    [theme.breakpoints.down("md")]: {
      paddingTop: "10%",
      flexDirection: "column",
    },
  },
}));

function Services() {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.root} id="services">
      {services.map((service) => (
        <ServiceCard service={service} checked={checked} />
      ))}

      {/* <ServiceCard service={services[1]} checked={checked} /> */}
    </div>
  );
}

export default Services;
