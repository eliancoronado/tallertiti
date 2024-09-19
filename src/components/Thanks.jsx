import React from 'react'
import Logo from "../assets/Arte da empresa.png"
import "./thanks.css";

const Thanks = () => {
  return (
    <>
      <div className="thankspage">
        <div className="tpcenter">
            <img src={Logo} alt="" />
            <h1>Gracias su pedido estara llegando en 20min</h1>
            <a href="/home"><button type="button">Regresar</button></a>
        </div>
      </div>
    </>
  )
}

export default Thanks
