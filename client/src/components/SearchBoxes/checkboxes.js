import React from "react";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import InputGroup from "react-bootstrap/InputGroup";

function CheckBox(props) {
  return (
    <div>
    <li>
    <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Checkbox aria-label={props.tooltip} />
    </InputGroup.Prepend>
  </InputGroup>
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
          prefix={props.prefix}
        />{" "}
        {props.name}
      </OverlayTrigger>
    </li>
      </div>
  );
}

export default CheckBox;
