import { useContext } from "react";
import { CartContext } from "../context/cartContext";


const CartWidget = () => {
const {totalProducts} = useContext(CartContext);

    return (
    <button className='btn btn-primary'>
        <i className="bi bi-cart3"></i>
        <span>{totalProducts() || ''}</span>
    </button>
    );
};

export default CartWidget;