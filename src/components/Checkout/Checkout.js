import React, { useState } from 'react'
import {getFirestore,collection,addDoc} from 'firebase/firestore'

const Checkout = () => {


    const[orderId,setOrderId] = useState ()
    const [buyer,setbuyer] = useState({
        nombre : "",
        Email : "",
        Telefono : "",
    })

    const {Nombre,Email,Telefono} = buyer

    const [item,setItem] = useState ([

    ])

    const handleInputChange = (e) => {
        setbuyer({
            ...buyer,
            [e.target.name] : e.target.value
              
        })

    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const total = item.reduce((acum,unItem)=>acum+(unItem.precio*unItem.cantidad),0)
        const dia = new Date ()
        const data ={buyer,item,total,dia}
        
        generateOrder(data)
    }

    const generateOrder = async (data) => {
        const querydb = getFirestore ();
        const queryCollection = collection(querydb,"Orders")
        const order = await addDoc(queryCollection,data)
        setOrderId(order.id)
        

    }

  return (
    <div>
      <h1> Formulario</h1>
      <hr/>

      <form onSubmit={handleSubmit}>
        <input type="Text"
               name="Nombre"
               placeholder ='Nombre'
               value={Nombre}
               onChange={handleInputChange}
               required
        />
        <br/><br/>
         <input type="Email"
               name="Email"
               placeholder ='Email'
               value={Email}
               onChange={handleInputChange}
               
        />
        <br/><br/>
         <input type="Number"
               name="Telefono"
               placeholder ='Telefono'
               value={Telefono}
               onChange={handleInputChange}
               required
        />

        <input type='submit' value="Confirmar compra"/>
      </form>
      {orderId && <>
      <h1>Tu compra se realizo con exito!</h1>
      <h3>Tu ID de compra es: {orderId}</h3>
      </>}
    </div>
  )
}

export default Checkout
