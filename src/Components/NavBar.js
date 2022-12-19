import Container from 'react-bootstrap/Container';
import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant='dark'>
                <Container>
                    <Link to="/" className='navbar-brand'>Tienda de Libros</Link>
                        <Nav className="me-auto">
                            <Link to="/" className='nav-item nav-link active'> Home</Link>
                            <Link to="/category/libro" className='nav-item nav-link'>Libros</Link>
                            <Link to="/category/disco" className='nav-item nav-link'>Discos</Link>
                            <Link to="/cart"> <CartWidget /></Link>
                        </Nav>
                    
                </Container>
        </Navbar>
    
    );
};

export default NavBar;
