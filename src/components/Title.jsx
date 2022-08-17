import '../Styles/item.css'
import React from 'react';

const Title = (props) => {
    console.log(props);
    return(
    <div className='cardContainer'>
    <h1>{props.greeting}</h1>
    </div>
    )
}

export default Title;