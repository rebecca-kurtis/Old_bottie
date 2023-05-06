import React from "react";

export default function FormCheckBoxes (props) {
  const mappedOptions = props.selectOptions.map((option) => {
    return (
      <li key={option}>
      <label>
        {option}
        <input 
          type="checkbox" 
          name={option} 
          value={option}
          onChange={props.onChange} 
          />
      </label>
      </li>
    )
  });

  return (
  <div>
    <p> {props.groupText}</p>
    <ul>
    {mappedOptions}
    </ul>
  </div>
  )

};