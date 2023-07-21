import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../15-7-23/Login.css"

function Login() {

    const [userData, setUserData] = useState({ email: "", password: "" })
    const router = useNavigate();
    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.email && userData.password) {
            const users = JSON.parse(localStorage.getItem("Users")); // accessed localstorage

            var flag = false;
            for (var i = 0; i < users.length; i++) {
                if (users[i].email == userData.email && users[i].password == userData.password) {
                    flag = true; // re-assign
                }
            }

            if (flag == false) {
                return alert("Incorrect username or password")
            }
            localStorage.setItem(("CurrentUser"),JSON.stringify(userData));
            alert("Login successfull :)");
            setUserData({ email: "", password: "" })
            router('/');

        } else {
            alert(" please sumit the required data ")
        }
    }

    return (
        <div id="formbody">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label><br />
                <input type="email" name='email' onChange={handleChange} placeholder="email address " /><br />
                <label>Password</label><br />
                <input type="password" name="password" onChange={handleChange} placeholder="Password " /><br />
                <input type="submit" value='Login' /><br />
            </form>
        </div>
    )
}

export default Login;