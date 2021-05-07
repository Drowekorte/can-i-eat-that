import React, { useEffect } from "react";
import { ListItem, List } from "../List";
// import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";


function RecipesList({ pagination, setPagination, recipes }) {

  const prevClick = () => {
    if (pagination === 0) {
      return;
    }
    setPagination(pagination - 10);

  }
  const nextClick = () => {
    setPagination(pagination + 10);
  }

  // const [state, dispatch] =  
  // const removeRecipe = id => {
  // API.deleteRecipe(id)
  //   .then(() => {
  //     dispatch({
  //       type: REMOVE_RECIPE,
  //       _id: id
  //     });
  //   })
  //   .catch(err => console.log(err));
  // };

  // const getRecipes = () => {
  //   dispatch({ type: LOADING });
  //   API.getRecipes()
  //     .then(results => {
  //       dispatch({
  //         type: UPDATE_RECIPES,
  //         recipes: results.data
  //       });
  //     })
  //     .catch(err => console.log(err));
  // };

  // useEffect(() => {
  //   getRecipes();
  // }, []);

  return (
    <div>
      <h1>Recipe List</h1>

      <div className="container">
        <div className="row">
          {recipes.map(({ recipe }) => (
            <div className="col-12">
              <div className="card">
                <div className="card-image">
                  <img 
                      src={recipe.image} 
                      alt="" 
                />
                </div>
            
            <div className="card-content">
              <span className="card-title">{recipe.label}</span>
              
            </div>
            <div className="card-reveal">
              <ul>
              {recipe.ingredientLines.map(ingredient=>(
              <li>{ingredient}</li>
              ))}
              </ul>
              <div className="mt-5">
                <Link to="favorites">Add to favorites!</Link>
                
                </div>
                
              </div>
            </div>
          </div>
      ))}
      </div>
          <p onClick={prevClick}>Prev</p>
          <p onClick={nextClick}>Next</p>
<div className="mt-5">
                <Link to="favorites">View favorites</Link>
                
                </div>
        </div>
      </div>
      );
};

export default RecipesList;
