import ItemList from './ItemList';
import React,{useState,useEffect} from 'react';
import Title from './Title';
import { useParams } from 'react-router-dom'

const mangas = [
    { id: 1, imagen: "https://www.ivrea.com.ar/onepiece/onepiece01.jpg", category:"Ivrea", titulo: "One Piece"},
    { id: 2, imagen: "https://www.ivrea.com.ar/pandorahearts/pandorahearts01.jpg", category:"Ivrea", titulo: "Pandora Hearts"},
    { id: 3, imagen: "https://www.ivrea.com.ar/inuyasha/inuyasha01.jpg", category:"Ivrea", titulo: "Inuyasha"},
    { id: 4, imagen: "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/42249/9786075482354.jpg", category:"Panini", titulo: "Re Zero"},
    { id: 5, imagen: "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/15925/9786075280202.jpg", category:"Panini", titulo: "Naruto"},
    { id: 6, imagen: "https://contentv2.tap-commerce.com/v2/file/42723/1172/PCAFIREFO01.jpg", category:"Panini", titulo: "Fire Force"},
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