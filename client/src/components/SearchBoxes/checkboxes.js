import React from "react";
import { MDCFormField } from "@material/form-field";
import { MDCCheckbox } from "@material/checkbox";
const checkbox = new MDCCheckbox(document.querySelector(".mdc-checkbox"));
const formField = new MDCFormField(document.querySelector(".mdc-form-field"));
formField.input = checkbox;
import Tooltip from "react-bootstrap/Tooltip";

function CheckBox(props) {
  return (
    <li>
      <OverlayTrigger
        key={placement}
        placement={placement}
        overlay={
          <Tooltip id={`tooltip-${placement}`}>
            <p>{props.tooltip}</p>.
          </Tooltip>
        }
      >
        <input
          key={props.id}
          onClick={props.handleCheckChieldElement}
          type="checkbox"
          checked={props.isChecked}
          value={props.value}
        />{" "}
        {props.name}
      </OverlayTrigger>
    </li>
  );
}

export default CheckBox;
