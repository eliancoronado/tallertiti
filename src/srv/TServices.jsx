import React from 'react'
import "./TServices.css"
import moto from "../assets/moto.png";
import auto from "../assets/auto.png";

const TServices = () => {
  return (
    <>
      <div className="hmpage">
        <div className="mstop">
            <a href="/home"><button type="button">X</button></a>
        </div>
        <h1>Seleccione su vehiculo</h1>
        <a href="/motos">
            <div className="hmoption">
              <img src={moto} width="100%" />
            </div>
          </a>
          <a href="/autos">
            <div className="hmoption">
                <img src={auto} width="100%" />
            </div>
          </a>
      </div>
    </>
  )
}

export default TServices
