import { useEffect, useState } from "react"

function Type4Useeffect(){
    const [counter,setCounter]=useState(0)
    const [counter1,setCounter1]=useState(0)
    const [counter2,setCounter2]=useState(0)
    useEffect(()=>{
      console.log(" type 4 Useeffect ");
    },[counter1,counter2])


    return(
        <div>
            <h1>Type 4 : Useeffect More Dependency</h1>
            <h1>{counter}</h1>
            <button onClick={()=>setCounter((prevValue)=> prevValue +1)}> count 1</button>
            <h1>{counter1}</h1>
            <button onClick={()=>setCounter1((prevValue)=> prevValue +1)}> count 2 -selected</button>
            <h1>{counter2}</h1>
            <button onClick={()=>setCounter2((prevValue)=> prevValue +1)}> count 3 -selected</button>


        </div>
    )
}
export default Type4Useeffect