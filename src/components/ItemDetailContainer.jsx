import React,{ useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from 'react-router-dom'

const mangas =
[
    { id: 1, 
      imagen: "https://www.ivrea.com.ar/onepiece/onepiece01.jpg", 
      category:"Ivrea", 
      titulo: "One Piece", 
      sinopsis:"One Piece relata las aventuras de Monkey D. Luffy, un joven que, inspirado en Shanks, un pirata que le salvó la vida, desea convertirse en el Rey de los Piratas y encontrar el tesoro conocido como One Piece, que pertenecía a Gol D. Roger. Antes de ser ejecutado, hace 24 años, este legendario pirata contó al mundo sobre la existencia de su tesoro. Esto dio inicio a lo que se conoce como 'la Gran era de los piratas': innumerables piratas se dispusieron a buscar ese tesoro, causando grandes problemas al Gobierno Mundial. Luffy iniciará sus aventuras, reclutando amigos y nakamas que lo ayuden a cumplir su sueño.",
      precio:"$750"},
    { id: 2, 
      imagen: "https://ivrea.com.ar/fullmetalalchemist/fullmetalalchemist01.jpg", 
      category:"Ivrea", 
      titulo: "Fullmetal Alchemist",
      sinopsis:"Fullmetal Alchemist transcurre en un mundo alternativo donde la magia y la alquimia existen, y de hecho esta última es una de las ciencias más practicadas. Los alquimistas son personas que se valen de un círculo de transmutación para invocar cualquier objeto que se les antoje, siempre en completa concordancia con la 'ley de equivalencia de intercambio', que indica que para generar algo, tienen que entregar otra cosa de igual valor. Otra cosa que los alquimistas tienen que tener en cuenta es que está terminantemente prohibida la transmutación con humanos.El deseo de revivir a su madre provocó que los hermanos Edward y Alphose Elric desafiasen esta norma. No sólo no lograron su objetivo sino que además Edward perdió un brazo y una pierna, y Alphonse, su cuerpo completo (logrando luego adosar su espíritu al de una vieja armadura). Ahora, enrolados en la división de alquimistas del ejército de Amestris (el país que habitan), Edward y Alphonse van en busca de la piedra filosofal, que podría devolverlos a la normalidad. Lo que no se esperan es que detrás de esa piedra filosofa hay toda una conspiración en las sombras, que pretende destruir al mundo entero...",
      precio:"$750"
    },
    { id: 3, 
      imagen: "https://www.ivrea.com.ar/inuyasha/inuyasha01.jpg", 
      category:"Ivrea", 
      titulo: "Inuyasha",
      sinopsis:"En el antiguo Japón había un mezcla yokai (demonio) + perro + humano llamado Inuyasha, que buscaba la mítica perla de Shikon para convertirse en un yokai completo. Hasta que la sacerdotisa Kikyo lo ensarta contra un árbol de un flechazo y el tipo queda ahí durante añares. Convenientemente, Kagome, una adolescente del Japón actual, por obra del destino viaja en el tiempo y termina liberándolo para enfrentar un monstruo más jodido que él. Después de eso, la perla de Shikon estalla en cientos de pedazos y la bella y el bestia tendrán que unir fuerzas a regañadientes si quieren cumplir con sus objetivos",
      precio:"$1450"
    },
    { id: 4, 
      imagen: "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/42249/9786075482354.jpg", 
      category:"Panini", 
      titulo: "Re Zero",
      sinopsis:"Subaru Natsuki es un hikikomori que saliendo de una tienda de conveniencia es transportado misteriosamente a un reino de otro mundo, donde lo primero que le ocurre es encontrarse con unos bandidos; sin embargo, lo rescata una hermosa chica semi-elfa de cabello plateado llamada 'Satella'. Como pago decide ayudarla con un problema que ignoró por ayudarle. Sin embargo, pronto la chica muere y el mismo Subaru es herido mortalmente cuando le dice: 'Te prometo que te salvaré'. Entonces, el chico muere pero de pronto el tiempo se rebobina y se encuentra en el mismo punto en el que comenzó, lo que nombra 'Retorno de la Muerte'. Sin embargo, al reencontrarse con 'Satella' ella le reclama no llamarla como la Bruja de los Celos, por lo que allí es cuando, Subaru vuelve a querer ayudarla, pero confundido termina haciendo todo por su cuenta intentando salvar a la chica de su atacante, ¿Quien es 'Satella'? ¿Por qué Subaru fue transportado a ese mundo? ¿Por qué solo él recuerda lo ocurrido en bucles anteriores? Él mismo tendrá que volver una y otra vez de la muerte para descubrirlo y además salvar a los que quiere con el poder otorgado por la Bruja, que quiere mantener sus retornos como un secreto entre ambos.",
      precio:"$750"
    },
    { id: 5, 
      imagen: "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/15925/9786075280202.jpg", 
      category:"Panini", 
      titulo: "Naruto",
      sinopsis:"Naruto, un aprendiz de ninja de la Aldea Oculta de Konoha es un chico travieso que desea llegar a ser el Hokage de la aldea para demostrar a todos lo que vale. Lo que descubre al inicio de la historia es que la gente le mira con desconfianza porque en su interior está encerrado el demonio Kyubi que una vez destruyó la aldea, y que el anterior líder de la misma tuvo que encerrar en su cuerpo siendo aún muy pequeño, a coste de su vida. Aunque sus compañeros no saben esto, tampoco le aprecian porque es mal estudiante y siempre está haciendo bromas. Sin embargo, la forma de actuar y la determinación de Naruto demuestran a los demás que puede llegar muy lejos, y el recelo de los otros chicos se va disipando. Naruto y sus compañeros Sakura y Sasuke, junto a su maestro Kakashi tendrán que enfrentarse a una serie de combates y misiones a lo largo de la historia que les permitirán mejorar y crecer.",
      precio:"$750"
    },
    { id: 6, 
      imagen: "https://contentv2.tap-commerce.com/v2/file/42723/1172/PCAFIREFO01.jpg", 
      category:"Panini", 
      titulo: "Fire Force",
      sinopsis:"Shinra Kusakabe es un joven pirocinético de tercera generación que ganó el apodo de 'Huellas del Diablo' por su habilidad para encender sus pies a voluntad. Se une al Escuadrón Fire Force 8, que está compuesto por otros usuarios de llamas mientras trabajan para extinguir cualquier Infernal que encuentren. Cuando aparece una facción que está creando Infernales, Shinra comienza a descubrir la causa de un misterioso incendio que mató a su familia 12 años atrás.",
      precio:"$750"
    },
];

export const ItemDetailContainer = () =>{

    const [data, setData] = useState({});

    const {detalleId} = useParams();

    useEffect(() =>{
        const getData =new Promise(resolve =>{
            setTimeout(() =>{
                resolve(mangas);
            }, 2000);
        });

        getData.then(res => setData(res.find(manga => manga.id === parseInt(detalleId))));
    }, [])

    
    return (
        <ItemDetail data={data}/>
    )
}

export default ItemDetailContainer;