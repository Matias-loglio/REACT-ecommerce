import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {items} from '../Mocks/items.mock';

const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect (() => {
        new Promise((resolve) => {
            setProducts([]);

        return  setTimeout(() =>{
            resolve(items);  
            }, 1000);
        }).then((data) => {
        if (category) {
            const categories = data.filter(
                product => product.category === category
                );
                setProducts(categories);
        } else {
            setProducts(data);
        }
        });
    }, [category]);

    if (products.length === 0) {
        return <p>Loading...</p>
    }
    
    return (
    <div style={{color: "orange", fontSize: "15px"}}>
    <ItemList products={products} />
    </div>

    );
};

export default ItemListContainer;