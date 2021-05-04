import React from "react";
import { Col, Row, Container } from "../components/Grid";
import SearchRecipesForm from "../components/SearchRecipesForm";
import PostsList from "../components/RecipeList";

const Home = (props) => {
    
return (
  <Container fluid>
    <div>{props.name ? 'Welcome back' + props.name : 'You are not logged in'}</div>
    <Row>
      <Col size="md-6">
        <SearchRecipesForm />
      </Col>
      <Col size="md-6 sm-12">
        <RecipeList />
      </Col>
    </Row>
  </Container>
);
};

export default Home;
