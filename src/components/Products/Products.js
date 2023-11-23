import React from "react";

import ProductDetails from "./ProductDetails";

const Products = (props) => {
    console.log(props.items)

    let productData

    return (
        <div >
            {props.items.map((item, index) => (
                <ProductDetails
                    key={item.id}
                    productId={item.productId}
                    sellingPrice={item.sellingPrice}
                    productName={item.productName}

                />
            ))}
        </div>
    )
}

export default Products
