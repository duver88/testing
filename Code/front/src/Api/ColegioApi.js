const url = "http://localhost:5000/colegio";
//const url = "API PARA TRAER COLEGIO"

export async function getListColegios(){    
    const res = await fetch(url);
    const data = await res.json();               
   return data.Colegio
}

export async function saveColegio(colegio){
    const res = await fetch(url, {
        method: 'POST',
        headers: {'content-type': 'application/json',
        body: JSON.stringify(colegio)}
    });
    const data = await res.json();
    return data.colegio
}

export async function deleteColegio (id){
    const res = await fetch(url+ "/" + `${id}`,{
        method: 'DELETE'
      })          
      const data = await res.json();         
      return data
}

export async function updateColegio(colegio){
    const res = await fetch(url,{
        method: 'PATCH',
        headers:{'content-type': 'application/json'},
        body: JSON.stringify(colegio)
    });
    const data = await res.json();
    return data;
}
