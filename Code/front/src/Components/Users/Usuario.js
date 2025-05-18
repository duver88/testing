import React, { useEffect, useState } from 'react'
import { getListUsers,deleteUser,saveUser,updateUser } from '../../Api/UserApi';
import TablaUsuarios from './tableUsers';
import Header from '../Header/index';

function Usuario() {    
  
  const [usuarios,setUsuarios] = useState([]);
  const [usuario,setUsuario] = useState(null);
  const [mostrarLista,setMostrarLista] = useState(true);

    const Listar = () =>{
      getListUsers().then((data)=>{setUsuarios(data)}
      ).catch((err)=>{console.log(err)})
    }
       
    if (usuarios.length === 0)
        Listar();

        const verLista = (e) => {
          if(mostrarLista){
            setMostrarLista(false);
          }else{
            setMostrarLista(true);
            setUsuario({
              _id:null,
              nombre:"",
              estado:"",
              password:"",
              rol:""
            })
          }
        }

        const guardar = (usuario) => {
          if (usuario._id === null) {
            saveUser(usuario).then((data)=>{Listar()}).catch((err)=>{console.log(err)})
          }else{
            updateUser(usuario).then((data)=>{Listar()}).catch((err)=>{console.log(err)})
          }
          setMostrarLista(true);
        }
        
          const ver = (usuario) => {
            setUsuario(usuario);
            setMostrarLista(false);
          }

  return (
    <div>
      <Header />
      {!mostrarLista && <button className='btn btn-secondary m-4' onClick={verLista}>Ver Lista Usuarios</button>}
      {!mostrarLista && <button className='btn btn-secondary m-4' onClick={verLista}>Crear nuevo Usuario</button>}
      <TablaUsuarios usuarios = {usuarios} onView = {ver}/> 
    </div>
  )
}

export default Usuario;
