import React, { useState } from 'react'
import './Dynamicclasses.css'

const Dynamicclasses = () => {
    const[isButtonactive,setisButtonactive]= useState(false);
    const handleButtonClick = ()=>{
        setisButtonactive(!isButtonactive)
    };
    const kuchbhi = isButtonactive? 'active-button' : 'inactive-button'
    
  return (
    <button onClick={handleButtonClick} className={kuchbhi}>
       {isButtonactive? 'active-button' : 'inactive-button'}
    </button>
  )
}

export default Dynamicclasses