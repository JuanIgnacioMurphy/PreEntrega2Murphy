import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getFirestore, getDocs, where, query, collection } from "firebase/firestore";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const ref = !id ? collection(db, "items") : query(collection(db, "items"), where("categoryId", "==", id));

        getDocs(ref)
        .then((snapshot) => {
            setItems(
                snapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data()};
                })
            );
        })
        .finally(() => setLoading(false));
    }, [id]);


    if (loading) return (<Container><h1>Cargando...</h1></Container>);

    return (
<Container className="mt-4">
            <div className="row g-4">
                {items.map((i) => (
                    <div key={i.id} className="col-md-3">
                        <Card className="h-100 d-flex flex-column">
                            <Card.Img variant="top" src={i.image} className="card-img" />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{i.title}</Card.Title>
                                <Card.Text>{i.description}</Card.Text>
                                <Card.Text>{i.categoryId}</Card.Text>
                                <div className="mt-auto">
                                    <Link to={`/item/${i.id}`}><Button variant="primary">Ver más</Button></Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </Container>
    );
};







