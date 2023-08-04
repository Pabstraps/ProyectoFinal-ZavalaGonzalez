import React from 'react';
import BotonCarrito from '../CartWidget/CartWidget';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../assets/img/Logo.png'
import { NavLink,Link } from 'react-router-dom';


function NavBar() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/">
        <Link to ='/'>
      <img src={Logo} width={60} className='logo1'/>
        </Link>
        <Nav.Item>
          <NavLink to='/'>Pagina Principal</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to='/xbox'>Xbox</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to='/Playstation'>Playstation</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to='/Switch'>Nintendo Switch</NavLink>
        </Nav.Item>
        <Nav.Item>
        <NavLink to='/Carrito' id="carrito" className="cart-widget-container">
        <BotonCarrito/>
          </NavLink>
        </Nav.Item>
      </Nav>
      </>
  );
}

export default NavBar