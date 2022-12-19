import React from 'react';
import { useContext } from "react";
import { CartContext } from "../context/cartContext";


export const TrashWidget = ({ itemId }) => {
    const { removeItem } = useContext(CartContext);
    console.log({ itemId });
    return (
        <button
            onClick={() => removeItem(itemId)}
            className="btn btn-primary"
        >
            a ver q es
        </button>
    )
}
