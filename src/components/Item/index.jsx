import React from "react";

const Item = ({info}) =>{
    return(
        <a href="" className="Manga">
            <img src={info.imagen} alt="" width="200" height="270"/>
            <p>{info.titulo}</p>
        </a>
    )
}

export default Item;
