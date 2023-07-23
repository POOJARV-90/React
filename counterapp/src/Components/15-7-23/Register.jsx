import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../15-7-23/Reg.css"

const Register = () => {
 
    const [userdata , setUserdata] = useState ({name: "", email: "", password: ""});
    // console.log(userdata, "- userdata")
    const router = useNavigate();

    const handlechange = (e) => {
        setUserdata({...userdata, [e.target.name]:e.target.value})  //... for setting the prvious set in history

    }

    // console.log(userdata, "- userdata")
    const handlesubmit = (event ) => {
      event.preventDefault ();
      if(userdata.name && userdata.email && userdata.password){
        const array = JSON.parse (localStorage.getItem("Users")) || [] ; // javasrcript into
        const userdataobj = { name: userdata.name,
           email: userdata.email, 
           password: userdata.password ,
           cart : []
          }
        // console.log(array, "-array")
        array.push(userdataobj);
        localStorage.setItem("Users",JSON.stringify(array)); //convert data string
        alert ("Registered succesfully :)" );
        router("/login")

      }else {

        alert("Sumit the required fields")
      }

    }
  return (
    <div id="regbody">
      <h1>Register</h1>


        <form onSubmit={handlesubmit } >
            <label >Name</label> <br />
            <input name='name'  type="text" placeholder='Enter your name' onChange={handlechange}  /> <br />

            <label >Email</label> <br />
            <input name='email' type="email" placeholder='Enter your Email' onChange={handlechange}  /> <br />

            <label>Password</label> <br />
            <input name='password' type="password" placeholder='Enter your Password' onChange={handlechange}  /> <br />

            <input type="submit" value='Register' className='lastsubmit'/>


        </form>



    </div>
  )
}

export default Register