import React,{ useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const prod =
{ id: 1, 
  imagen: "https://www.ivrea.com.ar/onepiece/onepiece01.jpg", 
  titulo: "One Piece",
  sinopsis:"One piece Relata La historia de Luffy para convertirse en el rey de los piratas.",
  precio:"750$"
};

export const ItemDetailContainer = () =>{

    const [data, setData] = useState({});

    useEffect(() =>{
        const getData =new Promise(resolve =>{
            setTimeout(() =>{
                resolve(prod);
            }, 2000);
        });

        getData.then(res => setData(res));
    }, [])

    
    return (
        <ItemDetail data={data}/>
    )
}

export default ItemDetailContainer;