import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'
const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/Usuario" activestyle>
          Usuario
          </MenuLink>
          <MenuLink to="/Colegio" activestyle>
            Colegio
          </MenuLink>
          <MenuLink to="/Sedes" activestyle>
          Sede
          </MenuLink>        
          <MenuLink to="/Salon" activestyle>
          Salon
          </MenuLink>                      
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar