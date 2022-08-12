import ItemCount from './ItemCount';
import '../Styles/item.css';
import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { useCartContext } from './CartContext';





export const ItemDetail = ({data}) =>{

    const [goToCart, setGoToCart] = useState (false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) =>{
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return(
        <>
         <div className="card" >
         <div className="card-body">
             <img src={data.imagen} className="card-img-top" alt="" width="200" height="270"/>
             <h5 className="card-title"> {data.titulo}</h5>
             <p className="card-synopsis"> {data.sinopsis}</p>
             <p className="card-price"> {data.precio}</p> 
             {
                goToCart
                ?<Link to='/cart'>Finalizar compra</Link>
                :<ItemCount initial={3} stock={10} onAdd={onAdd} />   
             }   
         </div>
     </div> 
     </>
    );
}

export default ItemDetail;