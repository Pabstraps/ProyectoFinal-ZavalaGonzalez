import React from 'react'
import CartLogo from '../../assets/img/CartLogo.png'
import { Link } from 'react-router-dom';


function BotonCarrito() {
      return (
        <>
          <Link to="/Carrito"><img src={CartLogo} width={60}/></Link>

        
          
        </>
      );
    }
    
    export default BotonCarrito;
