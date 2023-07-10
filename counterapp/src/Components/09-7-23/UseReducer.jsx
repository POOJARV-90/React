import React, { useReducer } from 'react'

const reducer =(state, action) =>{
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 }; // step 4
        case "DECREMENT":
            return { count: state.count - 1 };
        case "RESET":
            return { count: 0 };
        case "PAYLOAD":
            return { count: state.count + action.payload }; // step 4
        default:
            return state;

        
}
}

const UseReducer = () => {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState)
    const Increment = () =>{
        console.log("Increment")
        dispatch({ type: "INCREMENT" });
    }

     const Decrement = () =>{
        console.log("Decrement")
        dispatch({ type: "DECREMENT" });
    } 
    const Reset = () =>{
        console.log("Reset")
        dispatch({ type: "RESET" });
    } 
    
    const Payload =() =>{
        console.log("payload")
    }
  return (
    <div>
        <h1>Count:{state.count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}> Re-set</button> <br />
        <button onClick={Payload}> Payload</button>
    </div>
  )
}

export default UseReducer