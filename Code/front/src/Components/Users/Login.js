import React from 'react'
import { getListUsers } from '../../Api/UserApi'
import "./Login.css"
function Login() {

  async function ingresar(){
    const users = await getListUsers()
    .then(users => (console.log(users)))
   .then(users => console.log(users));       
  };

  return (
    <div className='Formulario'>
      <div className='Login-contener'>
        <h1>BIENVENIDO</h1>
        <input className='Input' placeholder='Usuario' />
        <input className='Input' placeholder='Contraseña' />
        <button onClick={ingresar}>INGRESAR</button>
        <br/>                
      </div>
    </div>
  );
}

export default Login;
