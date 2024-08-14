// import Container from "react-bootstrap/Container";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import data from "../../data/productos.json";

// export const ItemDetailsContainer = () => {
//     const [item, setItem] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const { id } = useParams();

//     useEffect(()=> {
//         new Promise((resolve) => setTimeout(() => resolve(data), 2000))
//         .then(response => {
//             const found = response.find((i) => i.id === id);
//             setItem(found); 
//         })
//         .finally(() => setLoading(false));
//     }, [id]);

//     if(loading) return <Container><h1>Cargando...</h1></Container>;

//     return (
//         <Container className="mt-4">
//             <h1>{item.name}</h1>
//             <h2>{item.category}</h2>
//             <h3>{item.detail}</h3>
//             <img src={item.image} height={400} alt={item.name} />  
//             <br></br>
//             <b>${item.price}</b>
//         </Container>
//     );
// }

import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'; 
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../../data/productos.json";
import './ItemDetailsContainer.css'; 

export const ItemDetailsContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        new Promise((resolve) => setTimeout(() => resolve(data), 2000))
        .then(response => {
            const found = response.find((i) => i.id === id);
            setItem(found); 
        })
        .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <Container><h1>Cargando...</h1></Container>;

    if (!item) return <Container><h1>Item no encontrado</h1></Container>;

    return (
        <Container className="mt-4 d-flex justify-content-center">
            <Card className="item-details-card">
                <Card.Img variant="top" src={item.image} className="card-img" />
                <Card.Body className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start">
                        <div>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{item.category}</Card.Subtitle>
                            <Card.Text>{item.detail}</Card.Text>
                        </div>
                        <div className="d-flex flex-column align-items-end">
                            <Card.Text className="price">${item.price}</Card.Text>
                            <Link to="/" className="btn btn-secondary mt-3">Volver</Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};
