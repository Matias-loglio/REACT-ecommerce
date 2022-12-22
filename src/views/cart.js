import React, {useContext} from "react";

import { Layout } from '../components/Layout';
import {CartContext} from '../context/cartContext';
import carritoVacio from "../assets/carritoVacio.png";
import { Link } from "react-router-dom";
import { ItemCart } from "../components/ItemCart";


const CartView = () => {
    const {cart, totalPrecio, removeProduct} = useContext(CartContext);


return (
    <Layout>
        <div>
            {cart.length === 0 ? (
                <div>
                    <img src={carritoVacio} />
                    <p>Agrega Productos en el carrito desde <Link to="/">Aqui</Link></p>
                </div>
            ) : (
                <div>
                    {cart.map(product =><ItemCart key={product.id} product={product} />)}
                    <hr/>
                    <p>Total: ${totalPrecio()}</p>
                </div>
                )
            
            }
        </div>    
    </Layout>

) 
};

export default CartView;