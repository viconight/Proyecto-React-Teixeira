import '../Styles/item.css'
import Item from "./item";
import React from "react";


const ItemList = ({data= []}) =>{
    return(
        <div className="cardContainer">
          { data.map ( manga => {
            return <Item key={manga.id} info={manga}/>
             }
          )
          }
        </div>  
);
}

export default ItemList;
