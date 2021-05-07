import React, { useState, useEffect } from "react";
import { Container } from "../components/Grid";
// import CreatePostForm from "../components/CreatePostForm";
import SearchRecipesForm from "../components/SearchRecipesForm";
import RecipeList from "../components/RecipeList";

const Home = (props) => {

  // const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const APIKEY = process.env.EDAMAM_API_KEY;
    const APIID = process.env.EDAMAM_API_ID;

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
    <div className="container" >
      <div className="halfsies">
        <SearchRecipesForm setSearchTerm={setSearchTerm}/>
      </div>
      <div className="halfsies">
        <RecipeList />
      </div>
    </div>
  </Container>
);
};

export default Home;
