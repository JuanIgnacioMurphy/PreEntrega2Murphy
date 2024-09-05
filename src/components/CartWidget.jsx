import cart from '../assets/cart.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ItemsContext } from '../context/ItemsContext'

export const CartWidget = () => {

    const {items} = useContext(ItemsContext);

    const quantity = items.reduce((acc, act) => acc + act.quantity, 0)
    return (
    <Link to="/cart">
    <img src={cart} height={24}/> <span>{quantity}</span>
    </Link>
    )
}