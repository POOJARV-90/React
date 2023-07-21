import React, { useState } from 'react';
import '../flight/Loginflight.css';
import { useNavigate } from 'react-router-dom';

const Loginflight = () => {

  const [data , setData] = useState({name : "" , email :"" , password :""})
  const GOTO = useNavigate();
  const thechange = (e) => {
   setData({... data,[e.target.name ] : [e.target.value ] })

   }
   const thesubmit = (event) => {
      event.preventDefault();
      if (data.name && data.email && data.password){
        const store = JSON.parse(localStorage.getItem("candidate")) || [] ;
        const datastore = { name : data.name , email : data.email , password : data.password}
        // console.log(datastore);
         localStorage.setItem("candidate",JSON.stringify(store));
         store.push(datastore)
         alert ("REGISTERED")
         GOTO("/")


      }else{
        alert("SUBMIT REQUIRE DATA")
      }
   }

  return (
    <div>
      <div id="container">
        <div id="form-container">
          <form  onSubmit={thesubmit} >
            <label htmlFor="">Username</label> <br />
            <input type="text"  placeholder="Enter your name" name='name' onChange={thechange} /> <br />
           
            <label htmlFor="">Email</label> <br />
            <input type="email"  placeholder="Enter your email address" name='email' onChange={thechange} /> <br />

            <label htmlFor="">Password</label> <br />
            <input type="password" placeholder="Enter your password"  name='password' onChange={thechange} /> <br />
            

            <input type="submit" value="Login" className='button-class' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginflight;
