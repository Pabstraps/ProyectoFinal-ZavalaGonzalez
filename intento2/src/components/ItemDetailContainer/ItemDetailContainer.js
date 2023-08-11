import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import {getFirestore,doc,getDoc} from 'firebase/firestore'


const ItemDetailContainer = () => {

  const [item, setItem] = useState([]);
  const {id} = useParams();

    useEffect(()=>{

      
      const querydb = getFirestore();
      const queryDoc = doc(querydb, 'KirintorStore','oJyDOTcIqkOW0SfAYBcH');
      getDoc(queryDoc)
      .then(res => setItem(({id:res.id, ...res.data()})));

    },[id])



  
  return (
    <div className='container'>

      <ItemDetail item={item}/>

    </div>
  )
}

export default ItemDetailContainer
