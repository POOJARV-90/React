import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Formtwo = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" })

    const router = useNavigate();

    function handleChange(event) {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (!userData.name) return alert("Please enter your name")
        if (userData.name.length < 5) return alert("choose username more than 5 character") 
        if (!userData.email) return alert(" Please enter your Email")
        if (!userData.password) return alert("Please enter your password!")
       
       
        if (userData.password.length < 8) return alert("Password length must be 8 digit and more...")



        setUserData({ name: "", email: "", password: "" })
        alert("you have succesfully registerd in to y0ur account")
        router('/');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name : </label><br />
                <input type='text' value={userData.name}  name="name" onChange={handleChange} /><br />
                <label>Email : </label><br />
                <input type='email' value={userData.email} name="email" onChange={handleChange} /><br />
                <label>Password : </label><br />
                <input type='password' value={userData.password} name='password' onChange={handleChange} /><br />
                <input type='submit' value="Register" /><br />
            </form>
        </div>
    )
}


export default Formtwo