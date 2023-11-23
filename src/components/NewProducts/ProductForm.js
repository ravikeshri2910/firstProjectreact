import React, { useState } from "react"

import './ProductForm.css'

const ProductForm = props => {

    const [productId , setProductId] = useState('')
    const [sellingPrice, setSellingPrice] = useState('')
    const [productName, setProductName] = useState('')

    const productIdHandler = (event) =>{
        setProductId(event.target.value)
        console.log(event.target.value)
    }

    const sellingPriceHanler=(event) =>{
        setSellingPrice(event.target.value)
    }

    const productNameHandler = (event) =>{
        setProductName(event.target.value)
    }

    const fromSubmitHandler = (event) =>{
        event.preventDefault()

        let obj = {
            id : Math.random(),
            productId : productId,
            sellingPrice : sellingPrice,
            productName : productName
        }

        props.onProductData(obj)

        setProductId('')
        setProductName('')
        setSellingPrice('')

        console.log(obj)
    }

    return (

        <>
            <form className="form" onSubmit={fromSubmitHandler}>

                <h3>Enter Product</h3>

                <label>Product Id</label>
                <input placeholder="Enter Id" onChange={productIdHandler} value={productId}></input><br></br>

                <label>Selling Price</label>
                <input placeholder="Enter Price" onChange={sellingPriceHanler} value={sellingPrice}></input><br></br>

                <label>Product Name</label>
                <input placeholder="Enter Name" onChange={productNameHandler} value={productName}></input><br></br>

                <button>Submit</button>
            </form>
        </>
    )
}

export default ProductForm