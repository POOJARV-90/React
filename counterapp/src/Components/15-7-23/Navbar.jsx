import React, { useEffect, useState } from 'react'
import '../15-7-23/Navbar.css'
import { useNavigate } from 'react-router-dom';
import { useContext} from "react";
import  {Authcontext} from '../../context/Auth.context'

const Navbar = () => {

    const { state, login , logout} = useContext(Authcontext);   //, logout 
    console.log(state,"stse")

    const [user, setUser] = useState({});
    const router = useNavigate();

    useEffect(() => {
        if (state?.user) {
            setUser(state?.user)
        } else {
            setUser({});
        } 
    },[state])

    // function logout() {
    //     localStorage.removeItem("CurrentUser")
    //     setUser({})
    //     router('/')
    // }
  return (
    <div id='Navbar'>
        <div>  <div onClick={() => router('/')}><img src="https://c8.alamy.com/zooms/9/f3551f7b47064d73a7f423f337030f37/2g10x5h.jpg" alt="" /> </div> </div>

        <div >
                {user?.email ?
                    <>
                        <span className='left' onClick={() => router('/ProductsFromBackend')}>Products</span>
                        <span className='left'>Profile</span>
                        <span className='left'  onClick={() => router('/cart')} ><i class="fa-solid fa-cart-shopping"></i>  <p>Cart</p></span>
                        <span className='left' onClick={logout} > <i class="fa-solid fa-arrow-right-from-bracket"></i> <p>Logout</p> </span>
                    </>
                    :
                    <span  id='login' onClick={() => router('/login')}>Login</span>
                }
            </div>



    </div>
  )
}

export default Navbar