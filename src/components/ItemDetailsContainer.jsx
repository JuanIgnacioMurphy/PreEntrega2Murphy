import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import './ItemDetailsContainer.css'; 
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { ItemCount } from "./ItemQuantitySelector";
import { ItemsContext } from "../context/ItemsContext";


export const ItemDetailsContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const {addItem} = useContext(ItemsContext)

    useEffect(() => {
        const db = getFirestore();

        const refDoc = doc(db, "items", id);

        getDoc(refDoc)
        .then((snapshot) => {
            setItem({ ...snapshot.data(), id: snapshot.id});
        })

        .finally(() => setLoading(false));
    }, [id]);

    const onAdd = (quantity) => {
        addItem({...item, quantity})

        alert(`Agregaste ${quantity} a tu carrito`)
    }


    if (loading) return <Container><h1>Cargando...</h1></Container>;

    if (!item) return <Container><h1>Item no encontrado</h1></Container>;

    return (
        <Container className="mt-4 d-flex justify-content-center">
            <Card className="item-details-card">
                <Card.Img variant="top" src={item.image} className="card-img" />
                <Card.Body className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start">
                        <div>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{item.categoryId}</Card.Subtitle>
                            <Card.Text>{item.description}</Card.Text>
                        </div>
                        <div className="d-flex flex-column align-items-end">
                            <Card.Text className="price">${item.price}</Card.Text>
                            <Card.Text className="stock">Stock:{item.stock}</Card.Text>
                            <div>
                            <ItemCount stock= {item.stock} onAdd={onAdd} />
                            </div>
                            <Link to="/" className="btn btn-secondary mt-3">Volver</Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};
