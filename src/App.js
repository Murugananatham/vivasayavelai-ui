import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./Components/Header";
import Services from "./Components/Services";
import PartnerFarms from "./Components/PartnerFarms";
import Footer from "./Components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `linear-gradient(to bottom, rgba(17, 17, 17, 0.5), transparent), url(${
      process.env.PUBLIC_URL + "/assets/bg-min.jpeg"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
      </div>

      <Services />
      <PartnerFarms />
      <Footer />
    </div>
  );
}

export default App;
