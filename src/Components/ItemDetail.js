import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemCount } from "./ItemCount";


const ItemDetail = ({ item }) => {
    const navigate = useNavigate();
    const [count, setCount] = useState(1);
    const [currentStock, setCurrentStock] = useState(item.stock);
    const maxQuantity = currentStock; 

    function handleCount(type) {
        if (type === "plus" && count < maxQuantity) setCount(count + 1);
        if (type === "minus" && count > 1) setCount(count - 1);
    }

    function handleAdd(){
        if (currentStock < count) alert("no hay suficiente stock");
        else setCurrentStock(currentStock - count);
    }

    function handleCheckout() {
        navigate("/cart")
    }

    return (
        <div>
            <p>Titulo: {item.name}</p>
            <img src={item.img}></img>
            <p >{item.descripcion}</p>
            <div>{item.precio}</div>
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
                    disabled={currentStock === 0}>
                        agregar al carrito
                    </button>
                    <button 
                    className='btn btn-success'
                    onClick={handleCheckout}
                    disabled={currentStock === 0}>
                        Finalizar compra
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;