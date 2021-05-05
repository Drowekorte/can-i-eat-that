import React from "react";
import { MDCFormField } from "@material/form-field";
import { MDCCheckbox } from "@material/checkbox";
import OverlayTrigger from "react";
import { Tooltip } from "react-bootstrap";

const checkbox = new MDCCheckbox(document.querySelector(".mdc-checkbox"));
const formField = new MDCFormField(document.querySelector(".mdc-form-field"));
formField.input = checkbox;


function CheckBox(props) {
  return (
    <li>
      <OverlayTrigger
        key="bottom"
        placement="bottom"
        overlay={
          <Tooltip id={props.id}>
            <p>{props.tooltip}</p>.
          </Tooltip>
        }
      >
        <input
          key={props.id}
          onClick={props.handleCheckChildElement}
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
