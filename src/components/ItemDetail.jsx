import '../Styles/item.css';
import React from "react";



export const ItemDetail = ({data}) =>{
    return(
        <>
         <div className="card" >
         <div className="card-body">
             <img src={data.imagen} className="card-img-top" alt="" width="200" height="270"/>
             <h5 className="card-title"> {data.titulo}</h5>
             <p className="card-synopsis"> {data.sinopsis}</p>
             <p className="card-price"> {data.precio}</p>   
         </div>
     </div> 
     </>
    );
}

export default ItemDetail;