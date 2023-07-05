
import React from 'react'
import {useNavigate } from 'react-router-dom'

const Params = () => {
   const router = useNavigate();
    function goto(){
        router('/Singlepoduct/882428118')
    }
  return (
    <button onClick={goto}>
        click to go somewhere
    </button>
  )
}

export default Params