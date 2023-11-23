import React from "react";
import './ProductDetails.css'

const ProductDetails = (props) =>{

    const deleteHandler = (event) =>{
        console.log('h')
    }
    
    return( 
        
        <div className='products'>
            <h2>{props.productId}</h2>
            <h2>{props.productName}</h2>
            <div className='price'>${props.sellingPrice}</div>
            <button onClick={deleteHandler} >Delete Product</button>
        </div>
        
    )
}

export default ProductDetails