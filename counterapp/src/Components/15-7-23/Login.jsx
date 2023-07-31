import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../15-7-23/Login.css";
import { useContext } from "react";
import { Authcontext } from "../../context/Auth.context";

function Login() {
  const { state, login } = useContext(Authcontext); //, logout
  console.log(state)  

  const [userData, setUserData] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // Use navigate from useNavigate directly

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.email && userData.password) {
      const users = JSON.parse(localStorage.getItem("Users"));
      var flag = false;
      for (var i = 0; i < users.length; i++) {
        if (users[i].email == userData.email && users[i].password == userData.password) {
          flag = true;
          login(users[i]);
          alert("Login successful.");
          
          setUserData({ email: "", password: "" });
          navigate('/'); // Use navigate to redirect to the home page
          break;
        }
      }

      if (flag == false) {
        return alert("Please check credentials.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div id="formbody">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="email address "
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password "
        />
        <br />

        <input type="submit" value="Login" />
        <br />
      </form>
    </div>
  )
}

export default Login;
