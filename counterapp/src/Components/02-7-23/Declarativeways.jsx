import React from 'react'
import myData from './../../data/Product.json'

const Declarativeways = () => {
  return (
    <div>
    {myData.map((product) => (
        <div>
            <h1> Name :  {product.name}</h1>
            <h2>Description :{product.description}</h2>
            <h2>Price : {product.price} Rs.</h2>
            <h2>Quantity: {product.Quantity} </h2>
        </div>
    ))}
</div>
  )
}

export default Declarativeways