import React, { useContext } from 'react'
import CartLogo from '../../assets/img/CartLogo.png'
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';



function BotonCarrito() {
  
    const { getQuantity } = useContext(CartContext)

      return (
        <>
          <Link to="/Cart"><img src={CartLogo} width={60}/>
          <button style ={{backgroundColor:'#C39BD3', border:'none'}}>{getQuantity()}</button>
          </Link>
          
        </>
      );
    }
    
    export default BotonCarrito;
