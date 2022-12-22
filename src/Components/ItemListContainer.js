import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {items} from '../Mocks/items.mock';
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);

/*     useEffect(() => { */
/*         const db = getFirestore(); */
/*         const itemRef = doc(db, "items", "EeJ4K6dY0EZSJDFGJHy3"); */
/*         getDoc(itemRef).then((snapshot) => { */
/*             if (snapshot.exists()) { */
/*                 setProducts([{ id: "EeJ4K6dY0EZSJDFGJHy3", ...snapshot.data() }]); */
/*             } */
/*         }); */
/*     }, []); */

/* useEffect(() => { */
/*     const db = getFirestore(); */
/*      */
/* const itemsCollection = collection(db, "itms"); */
/* getDocs(itemsCollection).then((snapshot) =>{ */
/*     const products = snapshot.docs.map((doc) => ({ */
/*         id: doc.id, */
/*         ...doc.data(), */
/*     })); */
/*     setProducts(products); */
/* }) */
/* }, []); */

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