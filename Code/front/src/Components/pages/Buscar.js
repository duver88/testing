import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBInputGroup,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
          <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
          <input className='form-control' placeholder="Busca" aria-label="Search" type='Search' />  
          <MDBBtn outline>Buscar</MDBBtn>
        </MDBInputGroup>
      </MDBContainer>   
    </MDBNavbar>
  );
}