import {useState,useEffect} from "react";
import Itemlist from '../ItemList/ItemList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

      const ItemListContainer = () => {
      const [producto,setProducto] = useState ([]);
   
      useEffect(()=>{
            const getProducto = async ()=>{
            const response = await fetch ('https://rickandmortyapi.com/api/character')
            const data = await response.json()
            setProducto(data.results)
      }
            getProducto()
      },[])

  return (

    <Container fluid>
      <Row>
       {producto.map(p=> <Itemlist 
       key = {p.id}
       cardtitle = {p.name}
       image = {p.image}
       />)}
      </Row>
    </Container>
  )
}

export default ItemListContainer