import { useState, /* useEffect */ } from "react";


const ItemCount = ({}) => {
const [counter, setCounter] = useState(1);


/*     useEffect(() => { */
/*  */
/*     }, []); */

    return (
        <div>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter-1)} disabled={counter === 1}>-</button>
            <button onClick={() => setCounter(counter+1)} /* disabled={counter === stock} */>+</button>
            <button onClick={() => setCounter(1)}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;