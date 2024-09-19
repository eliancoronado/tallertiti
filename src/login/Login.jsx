import React from 'react'
import "./Login.css"
import Logo from "../assets/Arte da empresa.png"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [formData, setFormData] = useState({
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
          const res = await axios.post("http://localhost:4000/api/auth/login", {
            email: formData.email,
            password: formData.password,
          });
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
                <input type="email" name="email" onChange={handleChange} placeholder='Correo' required />
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder='Contraseña'
                    required
                />
            </div>
            <button type="submit">Login</button>
        </form>
            <p>
            No tienes una cuenta <a href="/">Registrate</a>
            </p>
      </div>
    </>
  )
}

export default Login
