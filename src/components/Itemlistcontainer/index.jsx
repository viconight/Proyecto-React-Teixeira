import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import React,{useState,useEffect} from 'react';
import Title from '../Title';

const mangas = [
    { id: 1, imagen: "https://www.ivrea.com.ar/onepiece/onepiece01.jpg", titulo: "One Piece"},
    { id: 2, imagen: "https://www.ivrea.com.ar/pandorahearts/pandorahearts01.jpg", titulo: "Pandora Hearts"},
    { id: 3, imagen: "https://www.ivrea.com.ar/inuyasha/inuyasha01.jpg", titulo: "Inuyasha"},
]

export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() =>{
    const getData = new Promise(resolve =>{
        setTimeout(() => {
            resolve(mangas);
        }, 2000);
    });
    getData.then(res => setData(res))
    }, []);

    const onAdd = (quantity) =>{
        alert(`compraste ${quantity} unidades`);
    }
    return(
        <>
        <Title greeting='Vongole Manga!' />
        <ItemCount initial={1} stock={10} onAdd={onAdd}/> 
        <ItemList data={data} />
        </>
    )
}


export default ItemListContainer;