import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./main.css";
export default class Education extends React.Component {
  render() {
    return (
      <Container
        style={{ height: "100%", width: "90%", verticalAlign: "middle" }}
      >
        <Row>
          <Col xs={10} className="edu1">
            <Row>
              <Col xs={3}>
                <Image
                  src="UniStuttgartLogo.png"
                  rounded
                  fluid
                  className="logo"
                />
              </Col>

              <Col xs={9}>
                <h1> Universitat Stuttgart</h1>
                <h5>MSc in Computer Science</h5>
                <h5>2018 - Current</h5>
                <br />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={10} className="edu2">
            <Row>
              <Col xs={3}>
                <Image src="WBUT.png" rounded fluid className="logo" />
              </Col>
              <Col xs={9}>
                <h1>West Bengal University of Technology</h1>
                <h5>BTech in Computer Science & Engineering</h5>
                <h5>2013 - 2017</h5>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={10} className="edu3">
            <Row>
              <Col xs={3}>
                <Image src="FAPS.png" rounded fluid className="logo" />
              </Col>
              <Col xs={9}>
                <h1>The Frank Anthony Public School</h1>
                <h5>High School</h5>
                <h5>1999 - 2013</h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
