import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';



function TableSalon(props) {
  const { salones, onView } = props;
              
    return (
<Card>    
<Card.Title className='m-4'>Tabla de salones</Card.Title>    
        <Card.Body>        
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
        <th>documento</th>
            <th>Nombre</th>
            <th>Estado</th>            
            <th></th>    
        </tr>
      </thead>
      <tbody>
      {
              salones.map((SalonRouter) => {
                return (<tr key={SalonRouter._id}>
                  <td>{SalonRouter.id}</td>
                  <td>{SalonRouter.descripcion}</td>
                  <td>{SalonRouter.estado}</td>                                    
                  <td><button onClick={onView(SalonRouter)}>Ver</button></td>                  
                </tr>)
              })
            }         
      </tbody>
    </Table>        
        </Card.Body>
      </Card>      
    )
  }    

export default TableSalon;
