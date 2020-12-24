import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import partnerFarms from "../static/partnerFarms";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "65vh",
    display: "flex",
    backgroundColor: "#FFFFF0",
    flexDirection: "column",
  },
  title: {
    margin: "5vh",
    marginTop: "10vh",
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#111",
    textAlign: "center",
  },
  partnerDiv: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  PartnerFarm: {
    height: "15vmax",
    margin: "10%",
    padding: "5vh",
    [theme.breakpoints.down("md")]: {
      height: "15vmax",
      borderBottom: "1px solid gray",
      padding: "1vh",
      paddingBottom: "2vh",
    },
  },
}));

function PartnerFarms() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Partner Farms</h2>
      <div className={classes.partnerDiv}>
        {partnerFarms.map((partnerFarm) => (
          <div>
            <img
              className={classes.PartnerFarm}
              src={partnerFarm.imageUrl}
              alt={partnerFarm.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartnerFarms;
