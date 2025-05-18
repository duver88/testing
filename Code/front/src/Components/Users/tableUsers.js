import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';



function TableUsers(props) {
  const { usuarios, onView } = props;
              
    return (
<Card className='m-4'>    
<Card.Title className='m-4'>Tabla de usuarios</Card.Title>    
        <Card.Body>        
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
        <th>documento</th>
            <th>Nombre</th>
            <th>Estado</th>            
            <th>rol</th>
            <th></th>    
        </tr>
      </thead>
      <tbody>
      {
              usuarios.map((UserSistemRouter) => {
                return (<tr key={UserSistemRouter._id}>
                  <td>{UserSistemRouter.documento}</td>
                  <td>{UserSistemRouter.nombre}</td>
                  <td>{UserSistemRouter.estado}</td>                  
                  <td>{UserSistemRouter.rol}</td>                  
                  <td><button onClick={onView(UserSistemRouter)}>Ver</button></td>                  
                </tr>)
              })
            }         
      </tbody>
    </Table>        
        </Card.Body>
      </Card>      
    )
  }    

export default TableUsers;
