import React from 'react'
import Item  from '../Item/Item'

 const ItemList2 = ({item}) => {

  return (

      <div className='row'>
         {item.map(i=>
         <div className='col-md-3'
         key={i.id}>
         <Item item={item}/>
         </div>
                  )
      }
      </div>
   )
}

export default ItemList2