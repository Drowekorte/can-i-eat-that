import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_RECIPES,
  REMOVE_RECIPE,
  UPDATE_RECIPES,
  ADD_RECIPE,
  ADD_FAVORITE,
  UPDATE_FAVORITES,
  REMOVE_FAVORITE,
  LOADING,
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case SET_CURRENT_RECIPES:
      return {
        ...state,
        currentRecipes: action.recipe,
        loading: false,
      };

    case UPDATE_RECIPES:
      return {
        ...state,
        recipes: [...state.recipes],
        loading: false,
      };

    case ADD_RECIPE:
      return {
        ...state,
        recipes: [action.recipe, ...state.recipes],
        loading: false,
      };

    case REMOVE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => {
          return recipe._id !== action._id;
        }),
      };

    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [action.recipe, ...state.favorites],
        loading: false,
      };

    case UPDATE_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites],
        loading: false,
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((recipe) => {
          return recipe._id !== action._id;
        }),
      };

    case LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    recipes: [],
    currentRecipe: {
      _id: 0,
      title: "",
      body: "",
      author: "",
    },
    favorites: [],
    loading: false,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
