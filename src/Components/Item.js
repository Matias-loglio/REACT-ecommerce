import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
    const navigate = useNavigate();

    const descripcion = product.descripcion.slice(0,30);
    const titulo = product.name.slice(0,20);

    function handleNavigate() {
        navigate(`/item/${product.id}`);
    }

return (
    <div onClick={handleNavigate}>
        <div>
            <img
            src={product.img}
            alt="Product"
            />
        </div>
        <div>
            <span >${product.precio}</span>
        <Link to={`/item/${product.id}`}><button className='btn btn-primary'>Ver Detalle</button></Link> 
        </div>
        
    </div>
);
};

export default Item;