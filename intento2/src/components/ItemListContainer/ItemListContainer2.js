 import React from 'react';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import ArrayProductos from '../Json/ArrayProductos.json'
import ItemList2 from '../ItemList/ItemList2';


const ItemListContainer2 = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
      const promesa = new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(id ? ArrayProductos.filter(item=> item.plataforma === id) : ArrayProductos)
        },1000)
      });

      promesa.then((data)=>{
        setItem(data)
      })
    }, [id])
  
  return (

    <div className='container'>
      <div className='row'>
      <ItemList2 item={item}/>
      </div>

    </div>
  );
}

export default ItemListContainer2; 