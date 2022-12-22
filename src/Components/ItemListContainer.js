
import {useGetItem} from "../hooks/useGetItem"
import ItemList from "./ItemList";
import { Loading } from "./Loading";


const ItemListContainer = () => {
    const items = useGetItem();

    if (!items) {
        return(
        <div>
            <Loading/>
        </div>);
        
    }
    
    return (
    <div style={{color: "orange", fontSize: "15px"}}>
        <ItemList products={items} />
    </div>

    );
};

export default ItemListContainer;