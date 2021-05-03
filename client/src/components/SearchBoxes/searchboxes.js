import React, { Component } from "react";
import CheckBox from "./checkboxes";
import "./searchboxes.css";

class SearchBoxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paramBoxes: [
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <h1> Check and Uncheck All Example </h1>
        <input
          type="checkbox"
          onChange={this.handleAllChecked}
          value="checkedall"
        />{" "}
        Check / Uncheck All
        <ul>
          {this.state.paramBoxes.map((paramBoxes, index) => {
            return (
              <CheckBox
                key={index}
                handleCheckChieldElement={this.handleCheckChieldElement}
                {...paramBoxes}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
