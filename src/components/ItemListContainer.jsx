import ItemList from './ItemList';
import React,{useState,useEffect} from 'react';
import Title from './Title';
import { useParams } from 'react-router-dom'

const mangas = [
    { id: 1, price:750, image: "https://www.ivrea.com.ar/onepiece/onepiece01.jpg", category:"Ivrea", title: "One Piece"},
    { id: 2, price:850, image: "https://ivrea.com.ar/fullmetalalchemist/fullmetalalchemist01.jpg", category:"Ivrea", title: "Fullmetal Alchemist"},
    { id: 3, price:1450, image: "https://www.ivrea.com.ar/inuyasha/inuyasha01.jpg", category:"Ivrea", title: "Inuyasha"},
    { id: 4, price:750, image: "https://http2.mlstatic.com/D_NQ_NP_607354-MLA49265720412_032022-O.webp", category:"Panini", title: "Re Zero"},
    { id: 5, price:750, image: "https://http2.mlstatic.com/D_NQ_NP_762707-MLA46403444866_062021-O.webp", category:"Panini", title: "Naruto"},
    { id: 6, price:750, image: "https://http2.mlstatic.com/D_NQ_NP_805011-MLA46093823058_052021-O.webp", category:"Panini", title: "Fire Force"},
]

export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() =>{
    const getData = new Promise(resolve =>{
        setTimeout(() => {
            resolve(mangas);
        }, 2000);
    });
    if (categoriaId){
        getData.then(res => setData(res.filter(manga => manga.category === categoriaId)))
    }else{
        getData.then(res => setData(res))
    }
    }, [categoriaId]);
    
    return(
        <>
        <Title greeting='Vongole Manga!' />
        <ItemList data={data} />
        </>
    )
}


export default ItemListContainer;