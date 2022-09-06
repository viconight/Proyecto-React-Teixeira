import ItemCount from './ItemCount';
import '../Styles/ItemDetail.css'
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
         <div className="contenedor" >
             <div className="imagenDiv">
             <img src={data.image} alt="" width="350" height="450"/>
             </div>
             <div className='contenido'>
             <h5 className="card-title"> {data.title}</h5>
             <p className="card-synopsis"> {data.synopsis}</p>
             <p className="card-price"> ${data.price}</p> 
             {
                goToCart
                ?<Link to='/cart'>Finalizar compra</Link>
                :<ItemCount initial={1}  onAdd={onAdd} />   
             }   
            </div>
         </div> 
     </>
    );
}

export default ItemDetail;