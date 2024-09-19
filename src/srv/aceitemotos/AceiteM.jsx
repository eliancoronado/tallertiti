import React from 'react'
import "./style.css";
import a1 from "../../assets/a1.png"
import a2 from "../../assets/a2.png"
import a3 from "../../assets/a3.png"

const AceiteM = () => {
  return (
    <>
      <div className="aceitem">
        <div className="mstop">
            <a href="/motos"><button type="button">X</button></a>
        </div>

        <a href="/thanks">
            <div className="amoption">
                <img src={a1} height="100%" />
                <h3>Aceite Shell 15W-50</h3>
            </div>
        </a>
        <a href="/thanks">
            <div className="amoption">
                <img src={a2} height="100%" />
                <h3>Aceite Motul 15W-50</h3>
            </div>
        </a>
        <a href="/thanks">
            <div className="amoption">
                <img src={a3} height="100%" />
                <h3>Aceite Castrol 15W-50</h3>
            </div>
        </a>
      </div>
    </>
  )
}

export default AceiteM
