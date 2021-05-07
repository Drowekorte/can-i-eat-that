import React, { useState, useEffect, useRef } from "react";
import { Col, Row, Container } from "../components/Grid";
// import CreatePostForm from "../components/CreatePostForm";
import SearchRecipesForm from "../components/SearchRecipesForm";
import RecipeList from "../components/RecipeList";

const Home = (props) => {

  // const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [pagination, setPagination] = useState(0);
  const [result, setResult] = useState([]);

  const prevSearchIdRef = useRef();
  useEffect(() => {
    prevSearchIdRef.current = searchTerm;
  });

  const prevSearch = prevSearchIdRef.current;

  useEffect(() => {

    const APIKEY = "1a69c78b7e77773efa62829cc3f05013";
    const APIID = "46239d36";

    var currentPagination = pagination;

    if (prevSearch !== searchTerm) {
      currentPagination = 0;
      setPagination(0);
    }

    const getRecipes = async () => {
      // fetch
      const result = await fetch(`https://api.edamam.com/search?q=${searchTerm}&app_id=${APIID}&app_key=${APIKEY}&from=${currentPagination}&to=${currentPagination + 10}`)

      const data = await result.json();
      if (data.hits.length > 0) {
        setResult(data.hits);
        
      }
console.log(data)
    };
    
    if(searchTerm  && (searchTerm !== prevSearch || pagination>0 )){
      getRecipes();
    }
  }, [searchTerm, pagination])

  return (
    <Container fluid>
      <div>{props.name ? 'Welcome back' + props.name : 'You are not logged in'}</div>
      {pagination}
      {searchTerm}
      <Row>
        <Col size="md-6">
          <SearchRecipesForm setSearchTerm={setSearchTerm} />
        </Col>
        <Col size="md-6 sm-12">
          <RecipeList recipes={result} pagination={pagination} setPagination={setPagination} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
