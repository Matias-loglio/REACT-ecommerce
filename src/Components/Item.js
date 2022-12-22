import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Item = ({ product, quantityAdded }) => {
    const navigate = useNavigate();

    
    function handleNavigate() {
        navigate(`/item/${product.id}`);
    }

return (
    
    <div className='card' onClick={handleNavigate}>
        <div className='card-body'>
            <div>
            <span>{product.name}</span>
                <img
                src={product.img}
                alt="Product"
                />
                <div className="flex justify-between items-center">
                    <span className="text-xs">
                        {quantityAdded ? "Agregados" : "En Stock"}:{" "}
                        {quantityAdded || product.stock}
                    </span>
                </div>
            </div>   
        </div>
    <div>
            <span >${product.precio}</span>
            <hr/>
        <Link to={`/item/${product.id}`}><button className='btn btn-primary'>Ver Detalle</button></Link> 
        </div>
        
    </div>
);
};

export default Item;