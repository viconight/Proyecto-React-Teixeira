import ItemList from './ItemList';
import React,{useState,useEffect} from 'react';
import { getFirestore, collection , getDocs, query, where } from "firebase/firestore";
import Title from './Title';
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() =>{
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'Mangas');
        if(categoriaId){
          const queryFilter = query(queryCollection, where('category', '==', categoriaId))
          getDocs(queryFilter)
          .then(res => setData(res.docs.map(manga => ({id: manga.id, ...manga.data() }))))
        }else{
          getDocs(queryCollection)
        .then(res => setData(res.docs.map(manga => ({id: manga.id, ...manga.data() }))))
        }
    }, [categoriaId]) 
    
    return(
        <>
        <Title greeting='Vongole Manga!' />
        <ItemList data={data} />
        </>
    )
}


export default ItemListContainer;