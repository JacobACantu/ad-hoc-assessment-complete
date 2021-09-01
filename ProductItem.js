import React from 'react'

const ProductItem = ({product}) => {
    return (
        <div className= 'product_item'>
            <h1> Product Name : {product.name}</h1>
            <p> Product Number : {product.product_number}</p>
            <p> Product Price (in Thousands) : {product.price}</p>

        </div>
    )
}

export default ProductItem
