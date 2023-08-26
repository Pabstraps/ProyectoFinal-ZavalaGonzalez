import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount2'
import { CartContext } from '../Context/CartContext'

 const ItemDetail = ({item}) => {
  const {stock} = useState(item.stock)

  const {addItem} = useContext(CartContext)

  const handleOnAdd = (count) => {
    addItem ({ id: item.id, price: item.precio, name: item.nombre, img: item.imagen}, count)
  }



  return (
    <div className='row'>
      <div className='col-md-4 offset-md-4'>
        <img src={item.imagen} className='img-fluid' alt={item.nombre}/>
        <h2>{item.nombre}</h2>
        <p>{item.sinopsis}</p>
        <p>${item.precio}</p>
        <p>Stock: {item.stock}</p>
      </div>
      <div>
        <ItemCount stockItems={stock} initial={1} onAdd={handleOnAdd} />
      </div>
    </div>
  )
}

export default ItemDetail
