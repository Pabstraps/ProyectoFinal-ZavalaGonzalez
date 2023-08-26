import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'

export const Cart = () => {

    const { cart } = useContext(CartContext)
    console.log("Carrito desde cart:", cart)
    return (

        <>
            <hr />
            {
                cart.length == 0 ? <h1>Carrito Vacio</h1>
                    : <div>
                        {cart.map(unItem => <div key={unItem.id}>
                            <h3>Titulo: {unItem.name}</h3>
                            <img src={unItem.img} />
                            <p>cantidad: {unItem.cant}</p>
                            <p>precio: {unItem.price}</p>
                            <hr /><br />
                        </div>)}
                    </div>
            }


            <br/>

            {cart.length == 0 ? <h2>Sigue navegando para encontrar lo que buscas</h2> :
            
            <Link to='/Checkout'>
            <button>Finalizar Compra</button>
            </Link>}

        </>
    )
}

export default Cart