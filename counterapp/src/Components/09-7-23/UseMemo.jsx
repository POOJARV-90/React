import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [todos,setTodo] = useState(["vidhi","pooja"]);
    const [counter,setCounter] = useState(0)
    // const Number = expensiveCalculation(counter);
    const Number = useMemo(() => { return expensiveCalculation(counter) }, [counter])


    function addTodo() {
       setTodo([...todos, "merlin"])
    }
  return ( 
   
    <div>

<h1>expensive calculation { Number}</h1>
<button onClick={() => setCounter((prevValue) => prevValue + 1)}>+</button>


  <h1>Todo :</h1>
  {todos.map((abc)=>(
    <h1>{abc}</h1>


  ))}
  <button onClick={addTodo}>add</button>

    </div>
  )
}
const expensiveCalculation = (number) => {
    console.log("Inside expensive calculation...")
    for (var i = 0; i < 100000000; i++) {
        number = number + 1;
    }
    return number;
}

export default UseMemo