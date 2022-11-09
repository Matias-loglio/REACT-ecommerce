import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <><div>

        </div>
        <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Tienda de Libros</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Libros</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Libros</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Discos
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Ofertas</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Contactanos
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link"> <CartWidget /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar></>
    
    );
};

export default NavBar;


