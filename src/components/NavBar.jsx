import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">Nave de Fibra</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
                        <Nav.Link as={NavLink} to="/category/remera">Remeras</Nav.Link>
                        <Nav.Link as={NavLink} to="/category/buzo">Buzos</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>



        </>
    );
};
