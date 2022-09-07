import {addDoc, collection, getFirestore} from 'firebase/firestore';
import React from "react";
import {Link} from 'react-router-dom';
import { useCartContext } from "./CartContext";
import ItemCart from "./itemCart";
import '../Styles/cart.css';
import Swal from 'sweetalert2'


export const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    const order = {
        buyer:{
            name:'victor',
            email:'victor@gmail.com',
            phone:'12125456',
            address:'rivadavia 2425',
        },
        items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})), 
        total: totalPrice(),
    }
    

    const handleClick = () => {
        Swal.fire({
            icon: 'success',
            title: 'Compra Realizada!',
            text: 'Gracias por tu compra!',
          })
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order).then(({ id }) => alert("Su codigo de orden es :" +id));
        
    }

    if(cart.length === 0){
        return(
        <>
        <div className='content'>
        <p>No hay productos en el carrito,</p>
        <Link to='/'>Pero , podes agregarle cosas!</Link>
        </div>
        </>
        )
    }
    return(
    <>
        <div className='carrito'>
    {
        cart.map(product => <ItemCart key={product.id} product={product} />)
    }
    <p>
        Total: ${totalPrice()}
    </p>
    <button onClick={handleClick}>Finalizar compra</button>
    </div>
    </>
    )
    
};

export default Cart