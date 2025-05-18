const url = "http://localhost:5000/userSistem";
//const url = "API PARA TRAER USUARIOS"

export async function getListUsers(){    
    const res = await fetch(url);
    const data = await res.json();           
   return data.UserSistemRouter
}

export async function saveUser(user){
    const res = await fetch(url, {
        method: 'POST',
        headers: {'content-type': 'application/json',
        body: JSON.stringify(user)}
    });
    const data = await res.json();
    return data.user
}

export async function deleteUser (id){
    const res = await fetch(url+ "/" + `${id}`,{
        method: 'DELETE'
      })          
      const data = await res.json();         
      return data
}

export async function updateUser(usuario){
    const res = await fetch(url,{
        method: 'PATCH',
        headers:{'content-type': 'application/json'},
        body: JSON.stringify(usuario)
    });
    const data = await res.json();
    return data;
}
