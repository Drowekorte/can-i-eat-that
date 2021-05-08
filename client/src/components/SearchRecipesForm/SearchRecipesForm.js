import React, { useState } from "react";
import SearchBoxes from "../SearchBoxes/searchboxes.js";
import "./style.css";

function SearchRecipesForm({ setSearchTerm }) {
  const [string, setString] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(string);
  };


  return (
    <div>
        <form className="form-group mt-5 mb-5" onSubmit={(e) => onSubmit(e)}>
          <label htmlFor="title">Search by Keyword:</label>
          <input
            placeholder="Search for a specific ingredient..."
            value={string}
            className="form-control mb-5"
            onChange={(event) => setString(event.target.value)}
            // ref={titleRef}
            id="keyword"
          />
          <label htmlFor="body">Search by Diet and Health Labels</label>
          <div className="boxCols">
            <SearchBoxes />
          </div>

          <button
            className="submit"
            // disabled={state.loading}
            type="submit"
            onClick={(e) => onSubmit(e)}
          >
            Search
          </button>
        </form>
    </div>
  );
}

export default SearchRecipesForm;
