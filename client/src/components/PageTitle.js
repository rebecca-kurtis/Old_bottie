import React from "react";
import './PageTitle.scss';

export default function PageTitle(props) {

  return (
    <h3 className="page-title">{props.message}</h3>
  );
}
