import React from 'react'
import "./Mservices.css";
import ca from "../assets/unnamed 2.png"
import cp from "../assets/download 2.png"

const MServices = () => {
  return (
    <>
      <div className="mservices">
        <div className="mstop">
            <a href="/servicios"><button type="button">X</button></a>
        </div>

        <a href="/aceite-motos">
            <div className="msoption">
                <img src={ca} height="100%" />
                Cambio de aceite
            </div>
        </a>
        <a href="/piezas-motos">
            <div className="msoption">
                <img src={cp} height="100%" />
                Cambio de piezas
            </div>
        </a>
      </div>
    </>
  )
}

export default MServices
