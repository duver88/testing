const url = "http://localhost:5000/salon";
//const url = "API PARA TRAER SALONES"

export async function getListSalon(){    
    const res = await fetch(url);
    const data = await res.json();           
   return data.Salon
}

export async function saveSalon(salon){
    const res = await fetch(url, {
        method: 'POST',
        headers: {'content-type': 'application/json',
        body: JSON.stringify(salon)}
    });
    const data = await res.json();
    return data.salon
}

export async function deleteSalon (id){
    const res = await fetch(url+ "/" + `${id}`,{
        method: 'DELETE'
      })          
      const data = await res.json();         
      return data
}

export async function updateSalon(usuario){
    const res = await fetch(url,{
        method: 'PATCH',
        headers:{'content-type': 'application/json'},
        body: JSON.stringify(usuario)
    });
    const data = await res.json();
    return data;
}
