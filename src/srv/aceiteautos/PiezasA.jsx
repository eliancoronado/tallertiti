import React from 'react'
import a1 from "../../assets/d1.png"
import a2 from "../../assets/d2.png"
import a3 from "../../assets/d3.png"
import "./style.css";

const PiezasA = () => {
  return (
    <>
      <div className="aceitem">
        <div className="mstop">
            <a href="/autos"><button type="button">X</button></a>
        </div>

        <a href="/thanks">
            <div className="amoption">
                <img src={a1} height="100%" />
                <h3>Cambio de neumaticos</h3>
            </div>
        </a>
        <a href="/thanks">
            <div className="amoption">
                <img src={a2} height="100%" />
                <h3>Cambio de baterias</h3>
            </div>
        </a>
        <a href="/thanks">
            <div className="amoption">
                <img src={a3} height="100%" />
                <h3>Cambio de amortiguadores</h3>
            </div>
        </a>
      </div>
    </>
  )
}

export default PiezasA
