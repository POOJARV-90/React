import React, { useCallback, useState } from 'react'
import Todos from './Todos'

const Callback = () => {
    const [Counter,setCounter]= useState(0)
    const [todos , setTodos] = useState(["pooja","vidhi"])

    // function addTodo(){
    //          setTodos([...todos, "merlin"])
    //  }

    const addTodo = useCallback (()=>{
        setTodos([...todos,"merlin"])
    } ,[todos])

  return (
    <div>
        <Todos todos={todos} addTodo={addTodo} />

        <h1>Counter: {Counter}</h1>
        <button onClick={()=> setCounter((prevalue) => prevalue  +1)}>add</button>



    </div>
  )
}

export default Callback