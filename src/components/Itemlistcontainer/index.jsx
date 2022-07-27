import ItemCount from '../ItemCount';
import React from 'react';
import Title from '../Title';

export const ItemListContainer = () => {

    const onAdd = (quantity) =>{
        console.log(`compraste ${quantity} unidades`);
    }
    return(
        <>
        <Title greeting='Vongole Manga!' />
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>   
        </>
    )
}

export default ItemListContainer;