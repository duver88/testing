import React from 'react'

const Registro = () =>{

}

function RegistroUsuarios() {
  return (
    <div>
      <div className='Login-contener'>
        <h1>Registro de Usuarios</h1>
        <input className='Input' placeholder='Usuario'></input>
        <input className='Input' placeholder='Correo'></input>
        <input className='Input' placeholder='Contraseña'></input>
        <input className='Input' placeholder='Confirmar Contraseña'></input>
        <button onClick={Registro}>Registrate</button>
      </div>
    </div>
  )
}

export default RegistroUsuarios;
