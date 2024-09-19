import React from 'react'
import "./style.css";
import a1 from "../../assets/b1.jpg"
import a2 from "../../assets/b2.jpg"
import a3 from "../../assets/b3.jpg"

const PiezasM = () => {
  return (
    <>
      <div className="aceitem">
        <div className="mstop">
            <a href="/motos"><button type="button">X</button></a>
        </div>

        <a href="/thanks">
            <div className="amoption">
                <img src={a1} height="100%" width="100%" />
                <h3>Cambio de neumaticos</h3>
            </div>
        </a>
        <a href="/thanks">
            <div className="amoption">
                <img src={a2} height="100%" width="100%" />
                <h3 className='ch'>Cambio de baterias</h3>
            </div>
        </a>
        <a href="/thanks">
            <div className="amoption">
                <img src={a3} height="100%" width="100%" />
                <h3>Cambio de bombillas y pidevia</h3>
            </div>
        </a>
      </div>
    </>
  )
}

export default PiezasM
