// import { useContext, useState } from "react";
// import { ItemsContext } from "../context/ItemsContext";
// import  Container from "react-bootstrap/Container";
// import { getFirestore, collection, addDoc } from "firebase/firestore";
// import { Empty } from "./Empty";

// const initialValues = {
//     phone: "",
//     email: "",
//     name: "",
// }

// export const Cart = () => {
//     const [buyer, setBuyer] =useState(initialValues);

//     const {items, reset, removeItem} = useContext(ItemsContext);

//     const handleChange = (ev) => {
//         setBuyer(prev => {
//             return {
//                 ...prev,
//                 [ev.target.name]: ev.target.value,
//             };
//         });
//     }

//     const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0)

//     const sendOrder = () => {
//         const order = {
//             buyer,
//             items,
//             total,
//         };

//         const db = getFirestore();
//         const orderCollection = collection(db, "orders");

//         addDoc(orderCollection, order)
//         .then(({id}) => {
//             if (id) {
//                 alert("Su orden" + id + "se completó con éxito")
//             }
//         })
//         .finally(() => {
//             reset();
//             setBuyer(initialValues);
//         })
//     };


//     if(items.length === 0 ) return <Empty />
//     return ( 
//     <Container>
//         <button onClick={reset}>Vaciar carrito</button>
//         {items.map((item) => {
//             return (
//                 <div key={item.id}>
//                     <h1>{item.title}</h1>
//                     <img src={item.image}/>
//                     <p>{item.quantity}</p>
//                     <button onClick={() => removeItem(item.id)}>Quitar artículo</button>
//                 </div>
//             )
//         })}

//         <br />
//         <div>
//             Total $ {total}
//         </div>
//         <br />

//         <form>
//             <div>
//                 <label>Nombre</label>
//                 <input value={buyer.name} name ="name" onChange={handleChange} />
//             </div>
//             <div>
//                 <label>Teléfono</label>
//                 <input value={buyer.phone} name ="phone" onChange={handleChange} />
//             </div>
//             <div>
//                 <label>Email</label>
//                 <input value={buyer.email} name ="email" onChange={handleChange} />
//             </div>
//             <button type="button" onClick={sendOrder}>Comprar</button>
                
//         </form>

//     </Container>
//     )
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { useContext, useState } from "react";
// import { ItemsContext } from "../context/ItemsContext";
// import Container from "react-bootstrap/Container";
// import { getFirestore, collection, addDoc } from "firebase/firestore";
// import { Empty } from "./Empty";

// const initialValues = {
//     phone: "",
//     email: "",
//     name: "",
// };

// export const Cart = () => {
//     const [buyer, setBuyer] = useState(initialValues);
//     const [errors, setErrors] = useState({}); // Para mostrar errores de validación

//     const { items, reset, removeItem } = useContext(ItemsContext);

//     const handleChange = (ev) => {
//         setBuyer((prev) => {
//             return {
//                 ...prev,
//                 [ev.target.name]: ev.target.value,
//             };
//         });
//     };

//     const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

//     // Función de validación
//     const validateForm = () => {
//         let formErrors = {};

//         if (!buyer.name) formErrors.name = "El nombre es obligatorio";
//         if (!buyer.phone) {
//             formErrors.phone = "El teléfono es obligatorio";
//         } else if (!/^\d+$/.test(buyer.phone)) {
//             formErrors.phone = "El teléfono solo debe contener números";
//         }
//         if (!buyer.email) {
//             formErrors.email = "El email es obligatorio";
//         } else if (!/\S+@\S+\.\S+/.test(buyer.email)) {
//             formErrors.email = "El email debe tener un formato válido";
//         }

//         setErrors(formErrors);
//         return Object.keys(formErrors).length === 0; // Retorna true si no hay errores
//     };

//     const sendOrder = () => {
//         if (!validateForm()) {
//             return; // No enviar si la validación falla
//         }

//         const order = {
//             buyer,
//             items,
//             total,
//         };

//         const db = getFirestore();
//         const orderCollection = collection(db, "orders");

//         addDoc(orderCollection, order)
//             .then(({ id }) => {
//                 if (id) {
//                     alert("Su orden " + id + " se completó con éxito");
//                 }
//             })
//             .finally(() => {
//                 reset();
//                 setBuyer(initialValues);
//             });
//     };

//     if (items.length === 0) return <Empty />;
//     return (
//         <Container>
//             <button onClick={reset}>Vaciar carrito</button>
//             {items.map((item) => {
//                 return (
//                     <div key={item.id}>
//                         <h1>{item.title}</h1>
//                         <img src={item.image} alt={item.title} />
//                         <p>{item.quantity}</p>
//                         <button onClick={() => removeItem(item.id)}>Quitar artículo</button>
//                     </div>
//                 );
//             })}

//             <br />
//             <div>Total $ {total}</div>
//             <br />

//             <form>
//                 <div>
//                     <label>Nombre</label>
//                     <input value={buyer.name} name="name" onChange={handleChange} />
//                     {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
//                 </div>
//                 <div>
//                     <label>Teléfono</label>
//                     <input value={buyer.phone} name="phone" onChange={handleChange} />
//                     {errors.phone && <span style={{ color: "red" }}>{errors.phone}</span>}
//                 </div>
//                 <div>
//                     <label>Email</label>
//                     <input value={buyer.email} name="email" onChange={handleChange} />
//                     {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
//                 </div>
//                 <button type="button" onClick={sendOrder}>Comprar</button>
//             </form>
//         </Container>
//     );
// };

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// ESTE ES
// import { useContext, useState } from "react";
// import { ItemsContext } from "../context/ItemsContext";
// import Container from "react-bootstrap/Container";
// import { getFirestore, collection, addDoc } from "firebase/firestore";
// import { Empty } from "./Empty";

// const initialValues = {
//     phone: "",
//     email: "",
//     name: "",
// };

// export const Cart = () => {
//     const [buyer, setBuyer] = useState(initialValues);

//     const { items, reset, removeItem } = useContext(ItemsContext);

//     const handleChange = (ev) => {
//         setBuyer((prev) => {
//             return {
//                 ...prev,
//                 [ev.target.name]: ev.target.value,
//             };
//         });
//     };

//     const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

//     // Verificar si todos los campos están llenos
//     const isFormValid = buyer.name && buyer.phone && buyer.email;

//     const sendOrder = () => {
//         if (!isFormValid) {
//             alert("Por favor, complete todos los campos.");
//             return;
//         }

//         const order = {
//             buyer,
//             items,
//             total,
//         };

//         const db = getFirestore();
//         const orderCollection = collection(db, "orders");

//         addDoc(orderCollection, order)
//             .then(({ id }) => {
//                 if (id) {
//                     alert("Su orden " + id + " se completó con éxito");
//                 }
//             })
//             .finally(() => {
//                 reset();
//                 setBuyer(initialValues);
//             });
//     };

//     if (items.length === 0) return <Empty />;
//     return (
//         <Container>
//             <button onClick={reset}>Vaciar carrito</button>
//             {items.map((item) => {
//                 return (
//                     <div key={item.id}>
//                         <h1>{item.title}</h1>
//                         <img src={item.image} alt={item.title} />
//                         <p>{item.quantity}</p>
//                         <button onClick={() => removeItem(item.id)}>Quitar artículo</button>
//                     </div>
//                 );
//             })}

//             <br />
//             <div>Total $ {total}</div>
//             <br />

//             <form>
//                 <div>
//                     <label>Nombre</label>
//                     <input
//                         value={buyer.name}
//                         name="name"
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Teléfono</label>
//                     <input
//                         value={buyer.phone}
//                         name="phone"
//                         onChange={handleChange}
//                         type="tel"
//                         inputMode="numeric"
//                         pattern="[0-9]*" // Solo permite números
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Email</label>
//                     <input
//                         value={buyer.email}
//                         name="email"
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <button type="button" onClick={sendOrder}>Comprar</button>
//             </form>
//         </Container>
//     );
// };


import { useContext, useState } from "react";
import { ItemsContext } from "../context/ItemsContext";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Empty } from "./Empty";
import './Cart.css'; // Asegúrate de ajustar el archivo CSS si es necesario

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

    // Verificar si todos los campos están llenos
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

