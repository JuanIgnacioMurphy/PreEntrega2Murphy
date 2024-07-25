import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
return <>(
<h2>Nave de Fibra</h2>
<ul>
    <li>
        <a href="#">Remeras</a>
    </li>
    <li>
        <a href="#">Buzos</a>
    </li>
    <li>
        <a href="#">Gorros</a>
    </li>
    <li>
        <a href="#">Otros</a>
    </li>
</ul>
<CartWidget />
)
</>;
};