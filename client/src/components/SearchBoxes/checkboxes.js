import React from "react";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function CheckBox(props) {
  return (
    <div>
      <OverlayTrigger
        key="bottom"
        placement="bottom"
        overlay={
          <Tooltip id={props.id}>
            <p>{props.tooltip}</p>
          </Tooltip>
        }
      >
        <div>
          <input
            key={props.id}
            onClick={props.handleCheckChieldElement}
            type="checkbox"
            checked={props.isChecked}
            value={props.value}
            prefix={props.prefix}
          />{" "}
          {props.name}
        </div>
      </OverlayTrigger>
    </div>
  );
}

export default CheckBox;
