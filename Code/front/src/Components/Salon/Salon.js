import React, { useEffect, useState } from 'react'
import { getListSalon,deleteSalon,saveSalon,updateSalon } from '../../Api/SalonApi';
import TableSalon from './TableSalon';
import Header from '../Header/index';

function Salon() {    
  
  const [salones,setSalones] = useState([]);
  const [salon,setSalon] = useState(null);
  const [mostrarLista,setMostrarLista] = useState(true);

    const Listar = () =>{
      getListSalon().then((data)=>{setSalones(data)}).catch((err)=>{console.log(err)})
    }
       
    if (salones.length === 0)
        Listar();

        const verLista = (e) => {
          if(mostrarLista){
            setMostrarLista(false);
          }else{
            setMostrarLista(true);
            setSalon({
              _id:null,
              nombre:"",
              estado:"",
              password:"",
              rol:""
            })
          }
        }

        const guardar = (salon) => {
          if (salon._id === null) {
            saveSalon(salon).then((data)=>{Listar()}).catch((err)=>{console.log(err)})
          }else{
            updateSalon(salon).then((data)=>{Listar()}).catch((err)=>{console.log(err)})
          }
          setMostrarLista(true);
        }

        const eliminar = (id) => {
          deleteSalon(id).then((data)=> {
            if (data.deletedCount === 1)
            Listar();
            }).catch((err)=>{console.log(err)})
          }

          const ver = (salon) => {
            setSalon(salon);
            setMostrarLista(false);
          }

  return (
    <div>      
      <Header />   
      {!mostrarLista && <button className='btn btn-secondary m-4' onClick={verLista}>Ver Lista salones</button>}
      {!mostrarLista && <button className='btn btn-secondary m-4' onClick={verLista}>Crear nueva salon</button>}
      <TableSalon salones = {salones} onView = {ver}/> 
    </div>
  )
}

export default Salon;
