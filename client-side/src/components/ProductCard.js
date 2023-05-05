import React from "react";
import { useNavigate } from "react-router-dom";
import './ProductCard.css';
// import datas from './data/products.json';

export default function ProductCard(props) {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/products/id`; 
    navigate(path);
  }

  return (
    <li 
      className="card"
      onClick={routeChange}
      >
      <img 
        className="card__image"
        src={props.imageSrc}
        alt="Products">    
      </img>
      <div className="card__info">
        <h4>{props.name}</h4>
        <p className="card__description">
          {props.description.length > 65?
            `${props.description.substring(0, 65)}...` : props.description
          }
        </p>
        <p className="card__price">{props.price}</p>
      </div>

    </li>
  );
}