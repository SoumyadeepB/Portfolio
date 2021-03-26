import { CssBaseline, Grid } from "@material-ui/core";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import SidePanel from "./components/sidePanel";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Publications from "./components/Publications";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: 1
    };
    this.onItemChange = this.onItemChange.bind(this);
  }

  onItemChange = value => {
    console.log("Value from child", value);
    this.state.menu = value;
  };
  render() {
    /* console.log("In App:", this.state);*/
    return (
      <div className="App full-width">
        <CssBaseline />
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={2}>
            <SidePanel
              menu={this.state.menu}
              onItemChange={this.onItemChange}
            />
          </Grid>
          <Grid item xs={10}>
            <Switch>
              <Route path="/" component={Portfolio} exact />
              <Route path="/education" component={Education} />
              <Route path="/experience" component={Experience} />
              <Route path="/publications" component={Publications} />
              <Route path="/achievements" component={Achievements} />
            </Switch>
          </Grid>
        </Grid>
      </div>
    );
  }
}
