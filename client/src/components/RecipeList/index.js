import React, { useEffect } from "react";
import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
// import { useStoreContext } from "../../utils/GlobalState";
// import { REMOVE_RECIPE, UPDATE_RECIPES, LOADING } from "../../utils/actions";
// import API from "../../utils/API";

function RecipesList() {
  // const [state, dispatch] =  useStoreContext();

  const removeRecipe = id => {
    // API.deleteRecipe(id)
    //   .then(() => {
    //     dispatch({
    //       type: REMOVE_RECIPE,
    //       _id: id
    //     });
    //   })
    //   .catch(err => console.log(err));
  };

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
      <h3 className="mb-5 mt-5">Recipe List</h3>
      {/* {state.recipes.length ? (
        <List>
          {state.recipes.map(recipe => (
            <ListItem key={recipe._id}>
              <Link to={"/recipes/" + recipe._id}>
                <strong>
                  {recipe.title} by {recipe.author}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removeRecipe(recipe._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3></h3>
      )} */}
      <div className="mt-5">
        <Link to="favorites">View favorites</Link>
      </div>
    </div>
  );
}

export default RecipesList;
