import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "../13-7-23/Product.css"

const Product = () => {
    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState({});
    const { id } = useParams();
    // console.log(products, "- products")
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])

    useEffect(() => {
        if (id && products.length) {
            const result = products.find((product) => product.id == id);
            // console.log(result, "-result")
            setSingleProduct(result)
        }
    }, [id, products])


    console.log(singleProduct, "- singleProduct")


    return (
        <div id='the-pro-body' >
            <div>
                <img src={singleProduct.image} />
            </div>
            <div >

                <h2>    Product-id {singleProduct.id} | {singleProduct.title}</h2>
                <p> <b>Description:</b> {singleProduct.description}</p>
                <h2>Price : {singleProduct.price} ₹</h2>
                <p> <b>Category</b> : {singleProduct.category} </p>
                <p></p>
            </div>
        </div >
    )
}

export default Product