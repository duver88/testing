const url = "http://localhost:5000/sede";
//const url = "API PARA TRAER SEDES"

export async function getListSedes(){    
    const res = await fetch(url);
    const data = await res.json();           
   return data.MatriculaCurso
}

export async function saveSede(sede){
    const res = await fetch(url, {
        method: 'POST',
        headers: {'content-type': 'application/json',
        body: JSON.stringify(sede)}
    });
    const data = await res.json();
    return data.sede
}

export async function deletesede (id){
    const res = await fetch(url+ "/" + `${id}`,{
        method: 'DELETE'
      })          
      const data = await res.json();         
      return data
}

export async function updatesede(sede){
    const res = await fetch(url,{
        method: 'PATCH',
        headers:{'content-type': 'application/json'},
        body: JSON.stringify(sede)
    });
    const data = await res.json();
    return data;
}
