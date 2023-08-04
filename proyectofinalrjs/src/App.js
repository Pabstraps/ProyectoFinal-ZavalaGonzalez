import './App.css';
import NavBar from '../src/components/navBar/navBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget'

import Playstation from '../src/components/categorias/Playstation'
import Switch from '../src/components/categorias/Switch'

import Error from './components/categorias/Error';
import Xbox from './components/categorias/Xbox';
import PlaystationId from './components/categorias/PlaystationId';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';





function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <NavBar className='nav'/>
      <Routes>
       <Route path ='/' element={<ItemListContainer className="Contenedor"/>}/>
       <Route path ='/category/:id' element={<ItemListContainer className="Contenedor"/>}/>
       <Route path = {'/item/:id'} element={<ItemDetailContainer/>}/>
       <Route path ='/Playstation/:id' element={<PlaystationId/>}/>
       <Route path ='/Xbox' element={<Xbox/>}/>
       <Route path ='/Playstation' element={<Playstation/>}/>
       <Route path ='/Switch' element={<Switch/>}/>
       <Route path ='/Carrito' element={<CartWidget/>}/>
       <Route path ='*' element={<Error/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
} 

export default App;
