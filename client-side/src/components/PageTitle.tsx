import React from "react";
import './PageTitle.css';

export default function PageTitle(props) {

  return (
    <h3 className="page-title">{props.message}</h3>
  );
}