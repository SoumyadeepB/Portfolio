import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./main.css";
export default class Experience extends React.Component {
  render() {
    var start = [new Date("01/01/2019"), new Date("08/01/2017")];
    var end = [new Date(), new Date("02/01/2018")];
    var diff = [
      (end[0].getFullYear() - start[0].getFullYear()) * 12 +
        (end[0].getMonth() - start[0].getMonth()),
      (end[1].getFullYear() - start[1].getFullYear()) * 12 +
        (end[1].getMonth() - start[1].getMonth()),
    ];

    return (
      <Container
        style={{ height: "100%", width: "90%", verticalAlign: "middle" }}
      >
        <Row>
          <Col xs={10} className="edu1">
            <Row>
              <Col xs={3}>
                <Image src="Fraunhofer.png" rounded fluid className="logo" />
              </Col>

              <Col xs={9}>
                <h1> Fraunhofer IPA </h1>
                <h5>Research Assistant</h5>
                {diff[0] >= 12 ? (
                  <h5>
                    {Math.floor(diff[0] / 12)} Year {diff[0] % 12} Months
                  </h5>
                ) : (
                  <h5>{diff[0] % 12} Months</h5>
                )}

                <br />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={10} className="edu2">
            <Row>
              <Col xs={3}>
                <Image src="NRI.png" rounded fluid className="logo" />
              </Col>
              <Col xs={9}>
                <h1>Nomura Research Institute</h1>
                <h5>Associate Software Engineer</h5>
                {diff[1] >= 12 ? (
                  <h5>
                    {Math.floor(diff[1] / 12)} Years, {diff[1] % 12} Months
                  </h5>
                ) : (
                  <h5>{diff[1] % 12} Months</h5>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
