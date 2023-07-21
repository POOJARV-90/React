import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const [userCart, setUserCart] = useState([]);
  const navigate = useNavigate();
  console.log(userCart, "- userCart")
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("CurrentUser"));
    if (user?.email) {
        const allUsers = JSON.parse(localStorage.getItem("Users"));
        for (var i = 0; i < allUsers.length; i++) {
            if (allUsers[i].email == user.email && allUsers[i].password == user.password) {
                setUserCart(allUsers[i].cart)
                break;
            }
        }
    } else {
        alert("Please login to watch all cart products.");
        navigate  ('/login')
    }
},[userCart])

  return (
    <div id='body'>
      <h1 id='head' style={{textAlign:'center' , color :"#010510" }}>Cart</h1>
      <div id='container'  >
        {userCart.length && userCart.map((pro) => (
          <div id='product'>
            <img
              id='img'
              src={pro.image}
              alt=""
            />
            <p id='detail'> {pro.title}</p >
            <h3 style={{ marginLeft: "20px" }}>Rs. {pro.price}</h3>
            <p id='category'> <b>Category :</b>{pro.category}</p>
            <span id='rating'> {pro.rating.rate} <i class="fa-regular fa-star"></i> </span>
            

          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
