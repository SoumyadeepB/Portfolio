import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { Container, Avatar, Typography } from "@material-ui/core";
import avatar from "../static/GitHub.jpg";
export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={{ textAlign: "center", marginTop: "-18vh" }}>
        <Typography variant="h2">Portfolio</Typography>
        <Avatar
          alt="Geek"
          src={avatar}
          style={{
            width: "240px",
            height: "240px",
            margin: "auto"
          }}
        />
        <ReactTypingEffect
          style={{ fontFamily: "Calibri", fontSize: "75px" }}
          className="typingeffect"
          text={["Programmer", "Learner", "Thinker"]}
          speed={80}
          eraseDelay={200}
        />
      </Container>
    );
  }
}
