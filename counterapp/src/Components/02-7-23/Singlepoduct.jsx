
import React from 'react'
import { useParams } from 'react-router-dom'

const Singlepoduct = () => {
    const kuchbhi = useParams();
    console.log(kuchbhi,"data here");
  return (
    <div>
            { kuchbhi &&  kuchbhi.id}
        </div>
  )
}

export default Singlepoduct

