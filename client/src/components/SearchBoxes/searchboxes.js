import React, { Component } from "react";
import CheckBox from "./checkboxes";
import "./searchboxes.css";
import searchOptions from "./searchoptions.json";

class SearchBoxes extends Component {
    state = { searchOptions };

  constructSrch = id => {
    // Map this.state.searchOptions for checkboxes to display
    // Filter to creat a new array of the selected boxes to add to the search URL
    const searchOptions = this.state.searchOptions.filter(srchOpt => srchOpt.id !== id);
    // Set this.state.searchOptions equal to the new search array
    this.setState({ searchOptions });
  };

// One button to unselect all or clear choices. Adding all wouldn't be helpful, so just clear.
// <input
//   type="checkbox"
//   onChange={this.handleAllChecked}
//    value="checkedall"
//  />{" "}
//  Check / Uncheck All 

  render() {
    return (
        <ul>
          {this.state.searchOptions.map(srchOpt => (
              <CheckBox
                key={srchOpt.id}
                name={srchOpt.name}
              />
            )
          )}
        </ul>
    );
  }
}

export default SearchBoxes;
