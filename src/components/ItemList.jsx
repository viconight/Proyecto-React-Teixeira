import Item from "./item";
import React from "react";
import '../Styles/item.css';

const ItemList = ({data= []}) =>{
    return(
        <div className='card'>
          { data.map ( manga => {
            return <Item key={manga.id} info={manga}/>
             }
        )
    }
     </div>
);
}

export default ItemList;
