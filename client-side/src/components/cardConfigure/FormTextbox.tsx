import React from "react";

export default function FormTextBox (props) {
  return (
  <div>
    <label>
      <p>{props.labelText}</p>
      <input type="text"
      key={props.name}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      />
    </label>
  </div>
  );
}