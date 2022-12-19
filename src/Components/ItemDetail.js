import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from "../context/cartContext";
import { ItemCount } from "./ItemCount";


const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);
    const navegacion = useNavigate();
    const [contador, setContador] = useState(1);
    const [actual, setActualStock] = useState(item.stock);
    const maxCantidad = actual; 

    function handleCount(type) {
        if (type === "plus" && contador < maxCantidad) setContador(contador + 1);
        if (type === "minus" && contador > 1) setContador(contador - 1);
    }

    function handleAdd(){
        if (actual < contador) alert("Sin stock");
        else {
            setActualStock(actual - contador);
            addItem(item, contador);
        }
    }

    function handleCheckout() {
        navegacion("/cart")
    }

    return (
        <div>
            <p>Titulo: {item.name}</p>
            <img src={item.img}></img>
            <p >{item.descripcion}</p>
            <div>{item.precio}</div>
            {actual > 0 && (
            <p>In Stock: {actual}</p>
            )}

            <div>
                {actual > 0 ? (
                    <ItemCount count={contador} handleCount={handleCount} />
                ) : (
                    <span> Sin Stock </span>
                )}
                <div>
                    <button 
                        className='btn btn-success'
                        onClick={handleAdd}
                        disabled={actual === 0}
                        >
                        agregar al carrito
                    </button>
                    <button 
                        className='btn btn-success'
                        onClick={handleCheckout}
                        >
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;