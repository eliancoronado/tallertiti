import React from 'react';
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="hmpage">
        <h1>Selecciona lo que quieres</h1>
          <a href="/servicios">
            <div className="hmoption">
              Compra de productos
            </div>
          </a>
          <a href="/delivery">
            <div className="hmoption">
                Asistencia
            </div>
          </a>
      </div>
    </>
  )
}

export default Home
