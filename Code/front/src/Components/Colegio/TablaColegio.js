import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';



function TablaColegio(props) {
  const { Registercolegios, onDelete, onView } = props;
              
    return (
<Card className='m-4'>    
<Card.Title className='m-4'>Tabla de Colegios</Card.Title>    
        <Card.Body>        
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
            <th>nit</th>
            <th>descripcion</th>
            <th>Estado</th>                        
            <th></th>                
        </tr>
      </thead>
      <tbody>
      {
              Registercolegios.map((colegio) => {
                return (<tr key={colegio._id}>
                  <td>{colegio.nit}</td>                  
                  <td>{colegio.descripcion}</td>                  
                  <td>{colegio.estado}</td>                  
                  <td><button onClick={onView(colegio)}>Ver</button></td>                  
                </tr>)
              })
            }         
      </tbody>
    </Table>        
        </Card.Body>
      </Card>      
    )
  }    

export default TablaColegio;
