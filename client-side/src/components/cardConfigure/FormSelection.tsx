import React from "react";

export default function FormSelection (props) {
  
  const mappedOptions = props.selectOptions.map((option) => {
    return <option key={option} value={option}>{option}</option>
  });

  return (
    <div>
      <label>
      
        <p>{props.labelText}</p>
        <select 
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        >
        {mappedOptions}
        </select>
      </label>
    </div>
  )
}