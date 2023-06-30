import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Type3Useeffect(){
    const [counter1 , setCounter1] = useState(0);
    const [counter2 , setCounter2] = useState(10);
    const Router = useNavigate();
    useEffect (()=>{
        console.log("type 3 use effect");
        if (counter1 == 15) {
            Router('/login')
        }
    },[counter1])
    return(
   <div>
    <h1>Type 3 : useeffect- single Dependency</h1>
    <h1>{counter1 }</h1>
    <button onClick={()=>setCounter1((preValue)=> preValue+1)}>counter1-selected</button>
    <h1>{counter2}</h1>
    <button onClick={()=>setCounter2((preValue)=> preValue+1)}>counter2</button>


   </div>

    );


}
export default Type3Useeffect;