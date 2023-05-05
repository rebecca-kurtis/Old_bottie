import React from "react"
import './PlantHeadingVisuals.css';
import datas from './data/products.json';


export default function PlantHeadingVisuals(props) {

  return (

    <div className="product_visuals">
 
      <img 
        className="product_visuals__img"
        src="/images/products/pics/1p.png"
        alt="Product">    
      </img>
      <div className="product_visuals__info">
        <div className="info">
          <img 
          src="/images/products/temp.png"
          alt="Sun">    
          </img>
          <p>{datas[0].temp}</p>
        </div>
        <div className="info">
          <img 
            src="/images/products/water.png"
            alt="Water">    
          </img>
          <p>{datas[0].water}</p>
        </div>
        <div className="info">
          <img 
            src="/images/products/height.png"
            alt="Height">    
          </img>
          <p>{datas[0].height}</p>
        </div>
        <div className="info">
          <img 
            src="/images/products/sun.png"
            alt="Sun">    
          </img>
          <p>{datas[0].sun}</p>
        </div>
      </div>

    </div>
  )

};