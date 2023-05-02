import React from "react";
import './ProductCard.scss';

export default function ProductCard(props) {

  return (
    <li className="card">
      <h4 className="card__name">{props.name}</h4>
      <p className="card__description">
        {props.description.length > 56?
          `${props.description.substring(0, 56)}...` : props.description
        }
      </p>
      <p className="card__price">{props.price}</p>
      <img 
        className="card__image"
        src={props.imageSrc}
        alt="Product image">    
      </img>
    </li>
  );
}


