import { useState } from "react";
import Button from 'react-bootstrap/Button';

export const ItemCount = ({ onAdd, stock }) => {
    const [count, setCount] = useState(1);

    const handleIncrease = () => {
        if (count < stock) setCount(prev => prev + 1);
    };

    const handleDecrease = () => {
        if (count > 1) setCount(prev => prev - 1);
    };

    const handleAdd = () => {
        onAdd(count);
        setCount(1);
    };

    return (
        <div className="d-flex align-items-center">
            <Button variant="primary" onClick={handleDecrease}>-</Button>
            <span className="mx-3">{count}</span>
            <Button variant="primary" onClick={handleIncrease}>+</Button>
            <Button variant="success" onClick={handleAdd} className="ms-3">Comprar</Button>
        </div>
    );
};
