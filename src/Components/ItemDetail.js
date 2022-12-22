import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from "../context/cartContext";
import { ItemCount } from "./ItemCount";


const ItemDetail = ({ item }) => {
    const { addProduct } = useContext(CartContext);
    const navegacion = useNavigate();
    const [count, setCount] = useState(1);
    const [currentStock, setCurrentStock] = useState(item.stock);
    const maxQuantity  = currentStock; 

    function handleCount(type) {
        if (type === "plus" && count < maxQuantity ) setCount(count + 1);
        if (type === "minus" && count > 1) setCount(count - 1);
    }

    function handleAdd(){
        if (currentStock < count) alert("Sin stock");
        else {
            setCurrentStock(currentStock - count);
            addProduct(item, count);
        }
    }

    function handleCheckout() {
        navegacion('/cart')
    }

    return (
        <div>
            <p>Titulo: {item.name}</p>
            <img src={item.img}></img>
            <p >{item.descripcion}</p>
            <div>${item.precio}</div>
            {currentStock > 0 && (
            <p>In Stock: {currentStock}</p>
            )}

            <div>
                {currentStock > 0 ? (
                    <ItemCount count={count} handleCount={handleCount} />
                ) : (
                    <span> Sin Stock </span>
                )}
                <div>
                    <button 
                        className='btn btn-success'
                        onClick={handleAdd}
                        disabled={currentStock === 0}
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