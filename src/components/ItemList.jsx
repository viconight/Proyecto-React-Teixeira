import Item from "./item";
import React from "react";

const ItemList = ({data= []}) =>{
    return(
        data.map(manga => <Item key={manga.id} info={manga}/>)
);
}

export default ItemList;
