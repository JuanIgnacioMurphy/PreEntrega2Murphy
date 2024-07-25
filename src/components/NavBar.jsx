import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Nave de Fibra</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#">Remeras</Nav.Link>
                        <Nav.Link href="#">Buzos</Nav.Link>
                        <Nav.Link href="#">Gorros</Nav.Link>
                        <Nav.Link href="#">Otros</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>



        </>
    );
};
