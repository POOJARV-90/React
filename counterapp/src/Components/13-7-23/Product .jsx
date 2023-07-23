import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "../13-7-23/Product.css"

const Product = () => {
    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState({});
    const [isuserlogin , setisUserlogin] = useState(false)
    const [currentUserEmail, setCurrentUserEmail] = useState("");
    const router  = useNavigate();

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

    useEffect(()=>{
        var user = JSON.parse(localStorage.getItem("CurrentUser"));
        console.log(user);
        if (user)
        {setisUserlogin(true);
            setCurrentUserEmail(user.email)
        }
        
    }, [])

    function addCart() {
        if (isuserlogin) {
            const users = JSON.parse(localStorage.getItem("Users"));

            for (var i = 0; i < users.length; i++) {
                if (users[i].email == currentUserEmail) {
                    users[i].cart.push(singleProduct);
                    localStorage.setItem("Users", JSON.stringify(users));
                    break;
                }
            }
            alert ("Product added to your cart")
            router('/ProductsFromBackend')
        } else {
            alert("You can't add product before login ")
            // router('/login')
            
        }

    }


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
                <button onClick={addCart}> Add to bag </button>
            </div>


        </div >
    )
}

export default Product