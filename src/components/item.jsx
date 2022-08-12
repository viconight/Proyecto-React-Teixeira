import '../Styles/item.css';
import { Link } from 'react-router-dom';
import React from "react";



const Item = ({info}) =>{

    return(
        <>
         <div className="card" >
         <div className="card-body">
             <img src={info.imagen} className="card-img-top" alt=""/>
             <h5 className="card-title"> {info.titulo}</h5>
             <div className='btn-group' role="group" aria-label="Basic mixed styles example">
             <Link id="" type="button" class="btn btn-dark" to={`/detalle/${info.id}`}>Ver detalle </Link>
               </div>  
         </div>
     </div> 
     </>
    )
}

export default Item;
