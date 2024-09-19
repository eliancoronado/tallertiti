import "../login/Login.css";
import Logo from "../assets/Arte da empresa.png";
import SpScreen from "../assets/iPhone 14 & 15 Pro Max - 1.png";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true); // Cambia el estado a true después de 2 segundos
    }, 2000);

    // Limpieza del temporizador
    return () => clearTimeout(timer);
  }, []);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://api-tallertiti.onrender.com/api/auth/register",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }
      );
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/home");
    } catch (error) {
      console.error("Error en el login", error.response?.data || error);
    }
  };

  return (
    <>
      <div className="loginpage">
        <img src={Logo} width="100%" />
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              placeholder="Nombre"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Correo"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Contraseña"
              required
            />
          </div>
          <button type="submit">Registrar</button>
        </form>
        <p>
          Ya tienes una cuenta <a href="/login">Iniciar Sesion</a>
        </p>
      </div>

      <div className={isActive ? "splashscreen active" : "splashscreen"}>
        <img src={SpScreen} width="100%" height="100%" />
      </div>
    </>
  );
};

export default Register;
