import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css'
import Login from './login/Login.jsx'
import Register from './register/Register.jsx'
import Delivery from './components/Delivery.jsx'
import Home from './home/Home.jsx'
import TServices from './srv/TServices.jsx'
import MServices from './srv/MServices.jsx'
import Aservices from './srv/Aservices.jsx'
import AceiteM from './srv/aceitemotos/AceiteM.jsx'
import PiezasM from './srv/aceitemotos/PiezasM.jsx'
import AceiteA from './srv/aceiteautos/AceiteA.jsx'
import PiezasA from './srv/aceiteautos/PiezasA.jsx'
import Thanks from './components/Thanks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/servicios' element={<TServices />}></Route>
        <Route path='/motos' element={<MServices />}></Route>
        <Route path='/aceite-motos' element={<AceiteM />}></Route>
        <Route path='/piezas-motos' element={<PiezasM />}></Route>
        <Route path='/autos' element={<Aservices />}></Route>
        <Route path='/aceite-autos' element={<AceiteA />}></Route>
        <Route path='/piezas-autos' element={<PiezasA />}></Route>
        <Route path='/delivery' element={<Delivery />}></Route>
        <Route path='/thanks' element={<Thanks />}></Route>
      </Routes>
    </Router>

  </StrictMode>
)
