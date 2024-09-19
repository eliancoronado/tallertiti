import React from 'react'
import a1 from "../../assets/c1.png"
import a2 from "../../assets/c2.png"
import a3 from "../../assets/c3.png"

const AceiteA = () => {
  return (
    <>
      <div className="aceitem">
        <div className="mstop">
            <a href="/autos"><button type="button">X</button></a>
        </div>

        <a href="/thanks">
            <div className="amoption">
                <img src={a1} height="100%" />
                <h3>Aceite Shell 20W-50</h3>
            </div>
        </a>
        <a href="/thanks">
            <div className="amoption">
                <img src={a2} height="100%" />
                <h3>Aceite Valvoline 20W-50</h3>
            </div>
        </a>
        <a href="/thanks">
            <div className="amoption">
                <img src={a3} height="100%" />
                <h3>Aceite Castrol 20W-50</h3>
            </div>
        </a>
      </div>
    </>
  )
}

export default AceiteA
