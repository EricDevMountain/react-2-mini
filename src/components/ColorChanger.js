import React from "react";

export default function ColorChanger(props) {
  return (
    <select
      className="dropDownContainer"
      onChange={e => props.update(e.target.value)}
      disabled={props.allowEdit === "true" ? false : true}
    >
      <option value="black"> Black </option>
      <option value="blue"> Blue </option>
      <option value="green"> Green </option>
    </select>
  );
}
