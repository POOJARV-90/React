import React, { useEffect, useState } from 'react';
import './ProductFromBackend.css';

const ProductsFromBackend = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {


        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setProducts(json))
    },[])
  return (

    
    // <div id='body'>
    //     {products. length?
        
    //   }



    // </div>
    <>
    

    <div id='body'>
            <h1 id='head'>Products : </h1>

            {products.length ?

                <div id='container' >
                    {products.map((pro) => (
                        // onClick={()=> router(`/product/${pro.id}`)}
                        <div id='product' >
                            <img id='img'  src={pro.image} />
                            <p id='detail'  > {pro.title}</p >
                            <h3 style={{ marginLeft: "20px" }}>Rs. {pro.price}</h3>
                            <p id='category'> <b>Category :</b>{pro.category}</p>


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