import { useEffect, useState } from "react";

function Type2Useeffect(){
    const[counter,setCounter]=useState(0);
    useEffect(()=>{
     console.log("type 2 effect")
    },[])
    function Add(){
        setCounter((prevValue)=>prevValue + 1)  

    }
return(

    <div>
        <h1>type 2: Empty Dependencies</h1>
         <h1>{counter}  </h1>
         <button onClick={Add}>screen render</button>
       </div>
);


}
export default Type2Useeffect