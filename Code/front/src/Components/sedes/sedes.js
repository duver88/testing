import React, { useEffect, useState } from 'react'
import { getListSedes,deletesede,saveSede,updatesede } from '../../Api/SedesApi';
import TableSedes from './TableSedes';
import Header from '../Header/index';

function Sede() {    
  
  const [sedes,setSedes] = useState([]);
  const [sede,setSede] = useState(null);
  const [mostrarLista,setMostrarLista] = useState(true);

    const Listar = () =>{
      getListSedes().then((data)=>{setSedes(data)}).catch((err)=>{console.log(err)})
    }
       
    if (sedes.length === 0)
        Listar();

        const verLista = (e) => {
          if(mostrarLista){
            setMostrarLista(false);
          }else{
            setMostrarLista(true);
            setSede({
              _id:null,
              nombre:"",
              estado:"",
              password:"",
              rol:""
            })
          }
        }

        const guardar = (sede) => {
          if (sede._id === null) {
            saveSede(sede).then((data)=>{Listar()}).catch((err)=>{console.log(err)})
          }else{
            updatesede(sede).then((data)=>{Listar()}).catch((err)=>{console.log(err)})
          }
          setMostrarLista(true);
        }
        
          const ver = (sede) => {
            setSede(sede);
            setMostrarLista(false);
          }

  return (
    <div>      
      <Header />
      {!mostrarLista && <button className='btn btn-secondary m-4' onClick={verLista}>Ver Lista sedes</button>}
      {!mostrarLista && <button className='btn btn-secondary m-4' onClick={verLista}>Crear nueva sede</button>}
      <TableSedes sedes = {sedes} onView = {ver}/> 
    </div>
  )
}

export default Sede;
