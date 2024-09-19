import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Delivery.css";
import Logo from "../assets/Arte da empresa.png";

const Delivery = () => {
  const [vehicleType, setVehicleType] = useState("moto");
  const [licensePlate, setLicensePlate] = useState("");
  const [situation, setSituation] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const currentTime = new Date().toLocaleString();

  const [formData, setFormData] = useState({
    vehicleType: "moto", // Inicializa con un valor
    licensePlate: "",
    situation: "",
    address: "",
    currentTime: currentTime, // Establece el tiempo actual
  });

  // Maneja el cambio en el select y los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const apiKey = "424ca54369c74519a24eae067ba1e783";
          try {
            const response = await fetch(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${apiKey}`
            );
            const data = await response.json();

            if (response.ok && data.results.length > 0) {
              const formattedAddress = data.results[0].formatted;
              setAddress(formattedAddress);
              setFormData((prevData) => ({
                ...prevData,
                address: formattedAddress,
              }));
            } else {
              setAddress("Dirección no encontrada");
              setError("No se encontró una dirección válida.");
            }
          } catch (err) {
            console.error("Error al llamar a la API:", err);
            setError("Error al obtener la dirección.");
          }
        },
        (error) => {
          setError("No se pudo obtener la ubicación.");
          console.error(error);
        }
      );
    } else {
      setError("Geolocalización no es soportada por este navegador.");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.address) {
      setError("La dirección no está disponible.");
      return;
    }

    if (
      !formData.vehicleType ||
      !formData.licensePlate ||
      !formData.situation ||
      !formData.address
    ) {
      setError("Todos los campos son requeridos.");
      return;
    }

    try {
      const response = await axios.post(
        "https://api-tallertiti.onrender.com/api/auth/solicitud",
        {
          vehicleType: formData.vehicleType,
          licensePlate: formData.licensePlate,
          situation: formData.situation,
          address: formData.address,
          currentTime: new Date().toISOString(), // Formato ISO
        }
      );

      console.log("Éxito:", response.data);
    } catch (error) {
      console.error("Error:", error);
      setError("Error al enviar la solicitud.");
    }
  };

  return (
    <>
      <div className="dvrypage">
        <img src={Logo} width="100%" />
        <form onSubmit={handleSubmit}>
          <label>
            Tipo de vehículo:
            <select
              name="vehicleType" // Agrega el nombre
              value={formData.vehicleType} // Asegúrate de que el valor esté vinculado
              onChange={handleChange}
            >
              <option value="moto">Moto</option>
              <option value="carro">Carro</option>
            </select>
          </label>
          <label>
            Placa:
            <input
              type="text"
              name="licensePlate" // Agrega el nombre
              value={formData.licensePlate} // Vincula el valor
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Situación:
            <input
              type="text"
              name="situation" // Agrega el nombre
              value={formData.situation} // Vincula el valor
              onChange={handleChange}
              required
            />
          </label>
          <label>Dirección: {address || "Cargando..."}</label>
          <button type="submit">Enviar</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </>
  );
};

export default Delivery;
