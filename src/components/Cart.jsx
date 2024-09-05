import { useContext, useState } from "react";
import { ItemsContext } from "../context/ItemsContext";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Empty } from "./Empty";
import './Cart.css';  

const initialValues = {
    phone: "",
    email: "",
    name: "",
};

export const Cart = () => {
    const [buyer, setBuyer] = useState(initialValues);
    const { items, reset, removeItem } = useContext(ItemsContext);

    const handleChange = (ev) => {
        setBuyer((prev) => ({
            ...prev,
            [ev.target.name]: ev.target.value,
        }));
    };

    const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

    const isFormValid = buyer.name && buyer.phone && buyer.email;

    const sendOrder = () => {
        if (!isFormValid) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        const order = {
            buyer,
            items,
            total,
        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order)
            .then(({ id }) => {
                if (id) {
                    alert("Su orden " + id + " se completó con éxito");
                }
            })
            .finally(() => {
                reset();
                setBuyer(initialValues);
            });
    };

    if (items.length === 0) return <Empty />;

    return (
        <Container className="mt-4">
            <Button variant="danger" onClick={reset} className="mb-4">Vaciar carrito</Button>
            {items.map((item) => (
                <Card key={item.id} className="mb-3 cart-card">
                    <div className="d-flex align-items-center">
                        <Card.Img 
                            variant="top" 
                            src={item.image} 
                            className="cart-img"
                        />
                        <div className="ms-3 d-flex flex-column align-items-end">
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>Precio: ${item.price}</Card.Text>
                            <Card.Text>Cantidad: {item.quantity}</Card.Text>
                            <Card.Text>Precio Total: ${item.price * item.quantity}</Card.Text>
                            <Button variant="danger" onClick={() => removeItem(item.id)}>Quitar artículo</Button>
                        </div>
                    </div>
                </Card>
            ))}
            <div className="d-flex justify-content-between align-items-center my-4">
                <h3>Total: ${total}</h3>
            </div>
            <Card className="p-4 bg-light">
                <Card.Body>
                    <Card.Title>Completa tus datos</Card.Title>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                value={buyer.name}
                                name="name"
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control
                                value={buyer.phone}
                                name="phone"
                                onChange={handleChange}
                                type="tel"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                value={buyer.email}
                                name="email"
                                onChange={handleChange}
                                type="email"
                                required
                            />
                        </Form.Group>
                        <Button 
                            variant="primary"
                            type="button"
                            onClick={sendOrder}
                            disabled={!isFormValid}
                        >
                            Comprar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

