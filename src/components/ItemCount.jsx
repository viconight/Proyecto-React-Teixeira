import '../Styles/ItemCount.css'

import React,{useState} from 'react';

export const ItemCount = ({ initial, stock, onAdd}) =>{
    const [count,setCount] = useState(initial);

    const decrease = () =>{
        setCount(count - 1);
    }

    const increase = () =>{
        setCount(count + 1);
    }

    return(
        <>
        <div className="counter">
        
            <div>
            <button disabled={count <= 1} onClick={decrease} className='right'>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase} className='left'>+</button>
            </div>
            <div>
                <button type="button" className="btn btn-dark" disabled={stock <=0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
            </div>
            </>
    );
}

export default ItemCount