import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Error from './components/categorias/Error';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer2 from './components/ItemListContainer/ItemListContainer2';
import Navbar2 from './components/navBar/NavBar2';
import CartProvider from './components/Context/CartContext';




function App() {
  return (
    <div className="App">

    <CartProvider>
     <BrowserRouter>
      <Navbar2 className='nav'/>
      <Routes>
       <Route path ={'/'} element={<ItemListContainer2 className="Contenedor"/>}/>
       <Route path ={'/plataforma/:id'} element={<ItemListContainer2 className="Contenedor"/>}/>
       <Route path = {'/item/:id'} element={<ItemDetailContainer/>}/>
       <Route path ='*' element={<Error/>}/>
      </Routes>
     </BrowserRouter>
    </CartProvider>

    </div>
  );
} 

export default App;
