import {useState} from 'react';

const ItemCount = ({inicial, stock, onAdd}) => {
    
    const [count, setCount] = useState(inicial);
    
    const sumar = () => count < stock && setCount(count + 1)

    const restar = () => count > 1 && setCount(count - 1)
    
    const agregarAlCarrito = () => onAdd(count)

    return (
        <div>
            <button onClick={restar} className="btn btn-dark"><i className="fas fa-minus">-</i></button>
                    {count}
            <button onClick={sumar} className="btn btn-dark"><i className="fas fa-plus"></i>+</button>
            <button className="btn btn-dark"onClick={agregarAlCarrito}><i className="fas fa-cart-plus">Agregar al carrito</i></button>
        </div>
    );
}

export default ItemCount;