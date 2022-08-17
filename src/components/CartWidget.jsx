import React from "react";
import {Link} from 'react-router-dom'
import { useCartContext } from "./CartContext";


const CartWidget = () => {
  const {totalProducts} =useCartContext();
    return(
    <>
<button type="button"  className="btn btn-dark btn btn-outline-success my-2 my-sm-0 " >
        <Link to='Cart'>🛒 <span className="badge badge-primary">{}</span >{totalProducts()||''}</Link>
      </button>
    </>
    )
}

export default CartWidget;