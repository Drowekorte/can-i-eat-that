import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Login from "../components/Login";
import Signup from "../components/Signup";

const LoginSignup = () => {
  return (
    <Container >
      <Row style={{ width: 560, paddingTop: 120}}>
        <Col size="md-12">
          <Jumbotron>
            <Col size="md-5">
              <Login />
            </Col>
            <Col size="md-5">
              <Signup />
            </Col>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginSignup;