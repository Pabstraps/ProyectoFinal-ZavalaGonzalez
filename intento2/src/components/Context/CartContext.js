import React, { useState,createContext, useEffect  } from 'react'

export const CartContext = createContext ()

const CartProvider = ({children}) => {
    const [cart,setCart]= useState ([])


    const addItem = (item,cant) =>{

        setCart([...cart, { ...item, cant }])

    }
    useEffect(() => {
        console.log(cart)
    }, [cart])

    

    return (
        <CartContext.Provider value={{cart,addItem}}>
        {children}
        </CartContext.Provider>
    )
}  

export default CartProvider
