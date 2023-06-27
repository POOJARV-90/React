import { useEffect, useState } from "react";

function Type1Useeffect(){
    const[counter,setCounter]=useState(0);
    useEffect(()=>{
        console.log("type-1-example")
    })
    function Add(){
        setCounter((prevValue)=>prevValue + 1) 
    }
    return(
       <div>
        <h1>type1: No Dependencies</h1>
         <h1>{counter} </h1>
         <button onClick={Add}>screen render</button>
       </div>
    );
 }
export default Type1Useeffect;