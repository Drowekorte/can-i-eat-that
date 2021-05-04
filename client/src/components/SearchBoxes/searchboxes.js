import React, { Component } from "react";
import CheckBox from "./checkboxes";
import "./searchboxes.css";
import searchOptions from "./searchoptions.json";

class SearchBoxes extends React.Component {
    state = { searchOptions };

  constructSrch = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const searchOptions = this.state.searchOptions.filter(srchOpt => srchOpt.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ searchOptions });
  };

  render() {
      const { searchOptions } = this.state;
    return (
      <div className="Search">
        <h2>Search by Diet and Health Labels</h2>
        <input
          type="checkbox"
          onChange={this.handleAllChecked}
          value="checkedall"
        />{" "}
        Check / Uncheck All
        <ul>
          {this.state.searchOptions.map(srchOpt => (
              <CheckBox
                key={index}
                handleCheckChieldElement={this.handleCheckChieldElement}
                {...paramBoxes}
              />
            )
          )}
        </ul>
      </div>
    );
  }
}

export default SearchBoxes;
