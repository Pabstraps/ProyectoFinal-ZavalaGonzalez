import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

 const ItemDetail = ({item}) => {
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
        <ItemCount stockItems={10}/>
      </div>
    </div>
  )
}

export default ItemDetail
