import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';



function TableSedes(props) {
  const { sedes, onView } = props;
              
    return (
<Card className='m-4'>    
<Card.Title className='m-4'>Tabla de sedes</Card.Title>    
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
              sedes.map((SedeRouter) => {
                return (<tr key={SedeRouter._id}>
                  <td>{SedeRouter.identificacion}</td>
                  <td>{SedeRouter.descripcion}</td>
                  <td>{SedeRouter.estado}</td>                                    
                  <td><button onClick={onView(SedeRouter)}>Ver</button></td>                  
                </tr>)
              })
            }         
      </tbody>
    </Table>        
        </Card.Body>
      </Card>      
    )
  }    

export default TableSedes;
