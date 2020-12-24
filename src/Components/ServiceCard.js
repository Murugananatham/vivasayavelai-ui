import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Collapse,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    minHeight: 500,
    background: "#fff",
    margin: "20px",
    borderRadius: "20px",
    boxShadow: "15px 15px 15px ",
    [theme.breakpoints.down("md")]: {
      maxWidth: 300,
      minHeight: 400,
    },
    "&:hover": {
      transition: "200ms ease-in-out",
      transform: "scale(1.05)",
    },
  },
  media: {
    minHeight: 300,
    height: 300,
    backgroundPosition: "center",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      minHeight: 200,
      height: 200,
    },
    "&:hover": {
      transition: "200ms ease-in-out",
      transform: "scale(1.1)",
    },
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "#111",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1rem",
    color: "#111",
    minHeight: 70,
  },
  action: {
    display: "flex",
    justifyContent: "center",
    minHeight: 70,
  },
  actionButton: {
    backgroundColor: "#5AFF3D",
    padding: 10,
    color: "#111",
  },
}));

export default function ImageCard({ service, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            image={service.imageUrl}
            title={service.title}
          ></CardMedia>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className={classes.title}
            >
              {service.title}
            </Typography>
            <Typography
              variant="body2"
              colot="textSecondary"
              component="p"
              className={classes.desc}
            >
              {service.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.action}>
          <Button size="small" color="primary" className={classes.actionButton}>
            Subscribe
            <ArrowForwardIcon />
          </Button>
        </CardActions>
      </Card>
    </Collapse>
  );
}
