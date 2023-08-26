 import React from 'react';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

import ItemList2 from '../ItemList/ItemList2';
import {getFirestore,collection,getDocs,query,where} from 'firebase/firestore';

const ItemListContainer2 = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
      const querydb = getFirestore();
      const queryCollection = collection(querydb, 'Products');
      if (id) {
        const queryfilter = query(queryCollection, where('plataforma', '==', id))
        getDocs(queryfilter)
        .then(res => setItem(res.docs.map(p=>({id: p.id,...p.data()}))))
      } else {


      getDocs(queryCollection)
     .then(res => setItem(res.docs.map(p=>({id: p.id,...p.data()}))))
    }}, [id])
  
  return (

    <div className='container'>
      <div className='row'>
      <ItemList2 item={item}/>
      </div>

    </div>
  );
}

export default ItemListContainer2; 