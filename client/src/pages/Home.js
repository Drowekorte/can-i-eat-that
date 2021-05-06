import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
// import CreatePostForm from "../components/CreatePostForm";
import SearchRecipesForm from "../components/SearchRecipesForm";
import RecipeList from "../components/RecipeList";

const Home = (props) => {

  // const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {


    const APIKEY = "1a69c78b7e77773efa62829cc3f05013";
    const APIID = "46239d36";

    const getRecipes = async () => {
      // fetch
      const result = await fetch(`https://api.edamam.com/search?q=${searchTerm}&app_id=${APIID}&app_key=${APIKEY}&from=0&to=10`)

      const data = await result.json();
      console.log(data)
    }
    getRecipes();
    }, [searchTerm])
    
return (
  <Container fluid>
    <div>{props.name ? 'Welcome back' + props.name : 'You are not logged in'}</div>
    <Row>
      <Col size="md-6">
        <SearchRecipesForm setSearchTerm={setSearchTerm}/>
      </Col>
      <Col size="md-6 sm-12">
        <RecipeList />
      </Col>
    </Row>
  </Container>
);
};

export default Home;
