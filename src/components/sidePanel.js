import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  Fab
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AssignmentIcon from "@material-ui/icons/Assignment";
import LocalLibraryRoundedIcon from "@material-ui/icons/LocalLibraryRounded";
import StarsIcon from "@material-ui/icons/Stars";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";
import React from "react";
import "./sidePanel.css";
import { Row, Col } from "react-bootstrap";

export default class SidePanel extends React.Component {
  constructor(props) {
    super(props);
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick = id => {
    console.log("Clicked!", id);
  };
  render() {
    return (
      <AppBar
        position="static"
        style={{
          background: "linear-gradient(-90deg, #242424 10%, #000000 90%)",
          height: "100vh"
        }}
        xs={12}
      >
        <Toolbar
          style={{
            marginTop: "15vh",
            marginLeft: "-1vw"
          }}
          xs={9}
        >
          <Grid
            container
            direction="column"
            justifyItems="center"
            alignItems="center"
            display="flex"
          >
            <Grid
              item
              xs={11}
              className="item"
              style={{ marginBottom: "20px" }}
              onClick={() => {
                window.location = "/";
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                className="sections"
                value={1}
              >
                <AccountCircleIcon style={{ marginRight: "10px" }} />
                <Typography variant="subtitle1">Portfolio</Typography>
              </IconButton>
            </Grid>
            <Grid
              item
              xs={11}
              className="item"
              style={{ marginBottom: "20px" }}
              onClick={() => {
                window.location = "/education";
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                value={2}
                className="sections"
              >
                <LocalLibraryRoundedIcon style={{ marginRight: "10px" }} />
                <Typography variant="subtitle1">Education</Typography>
              </IconButton>
            </Grid>
            <Grid
              item
              xs={11}
              className="item"
              style={{ marginBottom: "20px" }}
              onClick={() => {
                window.location = "/experience";
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                value={3}
                className="sections"
              >
                <WorkRoundedIcon style={{ marginRight: "10px" }} />
                <Typography variant="subtitle1">Experience</Typography>
              </IconButton>
            </Grid>
            <Grid
              item
              xs={11}
              className="item"
              style={{ marginBottom: "20px" }}
              onClick={() => {
                window.location = "/publications";
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                value={4}
                className="sections"
              >
                <AssignmentIcon style={{ marginRight: "10px" }} />
                <Typography variant="subtitle1">Publications</Typography>
              </IconButton>
            </Grid>
            <Grid
              item
              xs={11}
              className="item"
              style={{ marginBottom: "20px" }}
              onClick={() => {
                window.location = "/achievements";
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                value={5}
                className="sections"
              >
                <StarsIcon style={{ marginRight: "10px" }} />{" "}
                <Typography variant="subtitle1">Achievements</Typography>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}
