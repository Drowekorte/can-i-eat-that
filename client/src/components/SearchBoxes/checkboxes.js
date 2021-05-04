import React from 'react';
import Tooltip from 'react-bootstrap/Tooltip';

export const CheckBox = props => {
    return (
      <li>
       <input key={props.id} onClick={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.name}
      </li>
    )
}

export default CheckBox