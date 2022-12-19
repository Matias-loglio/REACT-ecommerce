
import {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import  Item  from '../components/Item';
import { Layout } from '../components/Layout';
import { Loading } from "../components/Loading";
import { TrashWidget } from "../components/TrashWidget";
import {CartContext} from '../context/cartContext';


const CartView = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const { productsAdded, clear } = useContext(CartContext);
    
    function handleNavigate() {
        navigate(`/`);
    }

    const handleFinalizePurchase = () => {
        setIsLoading(true);
        setTimeout(() => {
        clear();
        setIsLoading(false);
        alert("Compra finalizada");
        navigate("/");
        }, 2000);
    };

return (
    <Layout>
        <div>
            <h1>carrito</h1>
            <div className="cant-selector">
                <p className="cant-number">{'Numero'}</p>
                <div className="cant-button_contain">
                <button
                    className="cant-button"
                    onClick={() => {
                        productsAdded();
                    }}
                >
                    <ion-icon name="caret-up-outline"></ion-icon>
                </button>
            </div>
            <button
            onClick={handleFinalizePurchase}
            className="btn btn-primary"
            >
                Finalizar Compra
            </button>
            <button
            onClick={handleNavigate}
            className="btn btn-primary"
            >
                Seguir Comprando
            </button>
            <button
            onClick={() => {clear();}}
            className='btn btn-primary'>
            <i class="bi bi-trash3-fill"></i>
            </button>
            </div>
        </div>
        
        
        
    </Layout>

) 
};

export default CartView;