import React, { useEffect, useState } from 'react'
import { getListColegios,deleteColegio,saveColegio,updateColegio } from '../../Api/ColegioApi';
import TablaColegio from './TablaColegio';
import Header from '../Header/index';

function Colegio() {    
  
  const [colegios,setColegios] = useState([]);
  const [colegio,setColegio] = useState(null);
  const [mostrarLista,setMostrarLista] = useState(true);

    const Listar = () =>{
      getListColegios().then((data)=>{setColegios(data)}).catch((err)=>{console.log(err)})
    }
       
    if (colegios.length === 0){
      Listar();
    }
        

        const verLista = (e) => {
          if(mostrarLista){
            setMostrarLista(false);
          }else{
            setMostrarLista(true);
            setColegio({
              _id:null,
              identificacion:"",
              descripcion:"",
              estado:""              
            })
          }
        }

        const guardar = (colegio) => {
          if (colegio._id === null) {
            saveColegio(colegio).then((data)=>{Listar()}).catch((err)=>{console.log(err)})
          }else{
            updateColegio(colegio).then((data)=>{Listar()}).catch((err)=>{console.log(err)})
          }
          setMostrarLista(true);
        }

        const eliminar = (id) => {
          deleteColegio(id).then((data)=> {
            if (data.deletedCount === 1)
            Listar();
            }).catch((err)=>{console.log(err)})
          }

          const ver = (colegio) => {
            setColegio(colegio);
            setMostrarLista(false);
          }

  return (
    <div>   
      <Header />   
      {!mostrarLista && <button className='btn btn-secondary m-4' onClick={verLista}>Ver Lista Colegios</button>}
      {!mostrarLista && <button className='btn btn-secondary m-4' onClick={verLista}>Crear nuevo Colegio</button>}      
      <TablaColegio Registercolegios = {colegios}  onView = {ver}/> 
    </div>
  )
}

export default Colegio;
