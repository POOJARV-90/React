import React, { useEffect, useState } from 'react';
import './ProductFromBackend.css';
import { useNavigate } from 'react-router-dom';

const ProductsFromBackend = () => {
    const [products, setProducts] = useState([]);
    const router = useNavigate();

    const redirect = (id) => {
        router(`/product/${id}`)
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setProducts(json))
    },[])
  return (

    <>
    

    <div id='body'>
            <h1 id='head'>Products : </h1>

            {products.length ?

                <div id='container' >
                    {products.map((pro) => (
                        // onClick={()=> router(`/product/${pro.id}`)}
                        <div id='product'  onClick={() => redirect(pro.id)} >
                            <img id='img'  src={pro.image} />
                            <p id='detail'  > {pro.title}</p >
                            <h3 style={{ marginLeft: "20px" }}>Rs. {pro.price}</h3>
                            <p id='category'> <b>Category :</b>{pro.category}</p>
                            <span id='rating'> {pro.rating.rate} <i class="fa-regular fa-star"></i> </span>

                        </div>
                    ))}
                </div>
                :
                <h1 id='load'>  <img src="https://hackernoon.imgix.net/images/0*4Gzjgh9Y7Gu8KEtZ.gif" alt="" /></h1>
            }


        </div>
    
    </>

    
  )
}

export default ProductsFromBackend