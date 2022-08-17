import React from "react";
import {Link} from 'react-router-dom';
import { useCartContext } from "./CartContext";
import ItemCart from "./itemCart";


export const Cart = () => {
    const {cart, totalPrice} = useCartContext();
    
    if(cart.length === 0){
        return(
        <>
        <p>No hay productos en el carrito,</p>
        <Link to='/'>Pero , podes agregarle cosas! :D</Link>
        </>
        )
    }
    return(
    <>
    {
        cart.map(product => <ItemCart key={product.id} product={product} />)
    }
    <p>
        Total: ${totalPrice()}
    </p>
    </>
    )
    
};

export default Cart