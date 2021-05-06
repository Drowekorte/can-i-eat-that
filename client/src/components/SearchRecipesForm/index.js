import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_FAVORITE, LOADING } from "../../utils/actions";
import SearchBoxes from "../SearchBoxes/searchboxes.js";
import API from "../../utils/API";
import "./style.css";

function SearchRecipesForm() {
  const titleRef = useRef();
  const bodyRef = useRef();
  const authorRef = useRef();
  const {state, dispatch} = useStoreContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.saveRecipe({
      title: titleRef.current.value,
      body: bodyRef.current.value,
      author: authorRef.current.value,
    })
      .then((result) => {
        dispatch({
          type: ADD_FAVORITE,
          recipe: result.data,
        });
      })
      .catch((err) => console.log(err));

    titleRef.current.value = "";
    bodyRef.current.value = "";
  };

  return (
    <div>
      <div className="search">
        <h1>Can I Eat That?</h1>
        <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
          <label htmlFor="title">Search by Keywork:</label>
          <input className="form-control mb-5" ref={titleRef} id="keyword" />
          <label htmlFor="body">Search by Diet and Health Labels</label>
          <SearchBoxes />

          <button
            className="submit"
            //className="btn btn-success mt-3 mb-5"
            // disabled={state.loading}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchRecipesForm;
