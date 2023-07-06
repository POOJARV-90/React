
import React, { useState } from 'react'

const FormOne = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(name, "- name")
    console.log(email, "- email")
    console.log(password, "-password")

    function toSetName(event) {
        // console.log(event.target.value, "- check");
        setName(event.target.value)
    }


    function toSetEmail(event) {
        // console.log(event.target.value, "-check")
        setEmail(event.target.value)
    }


    function toSetPassword(event) {
        // console.log(event.target.value)
        setPassword(event.target.value)
    }


    async function submitData(event) {
        event.preventDefault();

        if (!name) {
            return alert("Name is required!")
        }
        if (name.length < 5) {
            return alert('More than 5 character needed ')
        }
        if (!email) {
            return alert("Enter your e-mail")
        }
        if (!password) {
            return alert("Enter your password")
        }
        if (password.length < 6) {
            return alert("More than 5 character needed")
        }

        // const res = await axios.post('https://awdiz-backend.com/api/v1/register', {
        //     name,
        //     email: email,
        //     password: password
        // })

        const res = { data: { message: "ok", status: 200 } }

        if (res.data.message == "ok") {
            return alert("you have registered successfully :)")
        } else {
            return alert("Internal error, Please try again..")
        }

    }

    return (
        <div style={{ display: 'flex', justifyContent: "center" }}>
            <form onSubmit={submitData}>
                <label>Name : </label><br />
                <input onChange={toSetName} type='text' placeholder=' Enter your name' /><br />
                <label>Email :</label><br />
                <input onChange={toSetEmail} type='email' placeholder='Enter your email' /><br />
                <label>Password :</label><br />
                <input onChange={toSetPassword} type='password' placeholder='Enter your password' /><br />
                <input type='submit' value="Register" />
            </form>
        </div>
    )
}
export default FormOne