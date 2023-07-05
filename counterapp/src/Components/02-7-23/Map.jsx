import React from 'react'

const Map = (props) => {
  console.log(props.myUser,"array here");
  return (
    <div>
      {props.examplearray && props?.examplearray.map((str)=>(
        <div>
          <h2>{str}</h2>
       </div>

      ))
      }

      <button onClick={()=> props?.setmyUser(
        [...props.myUser,"ROSE"]
      )} > Add Users </button>
    </div>
  )
}

export default Map