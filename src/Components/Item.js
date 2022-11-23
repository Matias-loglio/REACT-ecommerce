import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from "./ItemCount";

const Item = ({product}) => {
/*     return ( */
/*         <div> */
{/*             <img src={product.img} /> */}
{/*             <li>{product.name}</li> */}
{/*         </div> */}
/*     ); */

return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.img} />
    <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
        </Card.Text>
        <Card.Text>Precio: {product.precio}</Card.Text>
        <Card.Text>Disponibles: {product.stock}</Card.Text>
        <ItemCount >Agregar al carrito</ItemCount>
    </Card.Body>
    </Card>
);
};

export default Item;