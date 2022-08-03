import '../Styles/item.css';
import React from "react";

const Item = ({info}) =>{
    return(
        <>
         <div className="card" >
         <div className="card-body">
             <img src={info.imagen} className="card-img-top" alt="" width="200" height="270"/>
             <h5 className="card-title"> {info.titulo}</h5>
             <div className="btn-group" role="group" aria-label="Basic mixed styles example">
             </div>
         </div>
     </div> 
     </>
    )
}

export default Item;
