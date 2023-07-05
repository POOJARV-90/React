import React from 'react'

const Map = (props) => {
  console.log(props.examplearray,"array here");
  return (
    <div>
      {props.examplearray && props?.examplearray.map((str)=>(
        <div>
          <h2>{str}</h2>
       </div>

      ))
      }
    </div>
  )
}

export default Map