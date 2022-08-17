import '../Styles/item.css';
import { Link } from 'react-router-dom';
import React from "react";



const Item = ({info}) =>{

    return(
        <>
         <div className="card" >
            <div className = "card-body">
             <img src={info.image} className="card-img-top" alt=""/>
             <h5 className="card-title"> {info.title}</h5>
             <Link id="" type="button" class="btn btn-dark" to={`/detalle/${info.id}`}>Ver detalle </Link> 
             </div>
        </div> 
       </>
    )
}

export default Item;
