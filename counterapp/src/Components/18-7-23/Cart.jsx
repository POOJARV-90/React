import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../18-7-23/Cart.css'

const Cart = () => {

  const [finalPrice, setFinalPrice] = useState(0);

  const [userCart, setUserCart] = useState([]);

  const navigate = useNavigate();

  console.log(userCart, "- userCart-13")

  useEffect(() => {
    if (userCart.length) {
      
        var totalPrice = 0;
        for (var i = 0; i < userCart.length; i++) {
            totalPrice += userCart[i].price
        }
        setFinalPrice(totalPrice)
    }
}, [userCart])


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("CurrentUser"));

    if (user?.email) {

        const allUsers = JSON.parse(localStorage.getItem("Users"));

        for (var i = 0; i < allUsers.length; i++) {
            if (allUsers[i].email == user.email && allUsers[i].password == user.password) {
              console.log(allUsers[i],"line-36");
                setUserCart(allUsers[i].cart)
                
                break;
            }
        }
    }
     else {
        alert("Please login to watch all cart products.");
        navigate  ('/login')
    }
},[])

function buyProducts() {
  const user = JSON.parse(localStorage.getItem("CurrentUser"));
  if (user?.email) {
      const allUsers = JSON.parse(localStorage.getItem("Users"));
      for (var i = 0; i < allUsers.length; i++) {
          if (allUsers[i].email == user.email && allUsers[i].password == user.password) {
              allUsers[i].cart = [];
              localStorage.setItem("Users", JSON.stringify(allUsers))
              break;
          }
      }
     
  }
  setFinalPrice(0)
  setUserCart([]);
  alert("Product will deliver soon, Thank you for shopping.")
}



  return (
    <>
    <h1 id='head-1' style={{textAlign:'center' , color :"#010510" }}>Cart</h1>
    <div id='body-1' style={{display:'flex'}}>
      
      <div id='container-1' >
        {userCart?.length && userCart.map((pro) => (    //.length
          <div id='product-1'>
            <img
              id='img-1'
              src={pro.image}
              alt=""
            />
            <p id='detail-1'> {pro.title}</p >
            <h3 style={{ marginLeft: "20px" }}> {pro.price} $</h3>
            <p id='category-1'> <b>Category :</b>{pro.category}</p>
            <span id='rating-1'> {pro.rating.rate} <i className="fa-regular fa-star"></i> </span>
            

          </div>
        ))}
      </div>

      <div id='total-1' >
      <h1>Total </h1>
                    <p> <span>Total MRP :</span>  <span>{finalPrice + finalPrice} $</span>  </p>
                    <p> <span> Discount (50%) : </span>   <span> {finalPrice} $ </span> </p>
                    <button onClick={buyProducts} >Buy Products</button>


      </div>
    </div>
    </>
  );
};

export default Cart;
