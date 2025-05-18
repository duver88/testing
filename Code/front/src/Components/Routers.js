import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Usuario from './Users/Usuario'
import Colegio from './Colegio/Colegio'
import Sedes from './sedes/sedes'
import Salon from './Salon/Salon'
import Login from './login/login'

function Routers() {
  return (
    <BrowserRouter>
  
    <Routes>
      <Route path="/Usuario" element={<Usuario />} />
      <Route path="/Colegio" element={<Colegio />} />
      <Route path="/Sedes" element={<Sedes />} />
      <Route path="/Salon" element={<Salon />} />      
      <Route path="/" element={<Login />} />
    </Routes> 
    </BrowserRouter> 
)
}
export default Routers