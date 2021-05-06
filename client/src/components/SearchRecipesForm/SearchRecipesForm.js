import React, { useState } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_FAVORITE, LOADING } from "../../utils/actions";
import SearchBoxes from "../SearchBoxes/searchboxes.js";
import API from "../../utils/API";
import "./style.css";

function SearchRecipesForm({ setSearchTerm }) {
    const [string, setString] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        setSearchTerm(string);
    };
    // const titleRef = useRef();
    // const bodyRef = useRef();
    // const authorRef = useRef();
    // const [state, dispatch] = useStoreContext();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch({ type: LOADING });
    //     API.saveRecipes({
    //         title: titleRef.current.value,
    //         body: bodyRef.current.value,
    //         author: authorRef.current.value,
    //     })
    //         .then((result) => {
    //             dispatch({
    //                 type: ADD_FAVORITE,
    //                 recipe: result.data,
    //             });
    //         })
    //         .catch((err) => console.log(err));

    //     titleRef.current.value = "";
    //     bodyRef.current.value = "";
    // };

    return (
        <div>
            <div className="search">
                <h1>Can I Eat That?</h1>
                <form className="form-group mt-5 mb-5" onSubmit={e => onSubmit(e)}>
                    <label htmlFor="title">Search by Keyword:</label>
                    <input
                        placeholder="Search for a specific ingredient..."
                        value={string}
                        className="form-control mb-5"
                        onChange={event => setString(event.target.value)}
                        // ref={titleRef}
                        id="keyword" />
                    <label
                        htmlFor="body">Search by Diet and Health Labels</label>
                    <SearchBoxes />

                    <button
                        className="submit"
                        className="btn btn-success mt-3 mb-5"
                        // disabled={state.loading}
                        type="submit"
                        onClick={e => onSubmit(e)}>
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SearchRecipesForm;
