import React, { memo } from 'react'

const Todos = ({todos,addTodo}) => {
    console.log("INSIDE TODO");
  return (
    <div>
  <h1>Todo here</h1>
            {todos.map((todo) => (
                <p>{todo}</p>
            ))}

            <button onClick={addTodo}>Add user</button>



    </div>
  )
}

export default memo (Todos)