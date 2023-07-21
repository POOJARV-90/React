import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { useContext} from "react";
import {Authcontext} from './context/Auth.context'
function Home(){ 

    const { state, login , logout} = useContext(Authcontext);   //, logout 
    console.log(state,"stse")
    const [isuserlogin , setisUserlogin] = useState(false)
    const router  = useNavigate();
    const goto =  useNavigate();

    useEffect(()=> {
        // var user = JSON.parse(localStorage.getItem("CurrentUser"));
        // console.log(user);
        // if (user){setisUserlogin(true);}
        if  (state?.user?.email) {
            setisUserlogin(true);
        } else {
            setisUserlogin(false);
        }
        
    }, [state])

    
    function addcart () {
        if(isuserlogin){
            alert("You are logged in can cart product")
            goto('/ProductsFromBackend')
        }else{
            alert("Please login into your account")
        }
    }

    // function logout (){
    //     localStorage.removeItem("CurrentUser");
    //     setisUserlogin(false);
    // }


    return(
        <div>
          <div style={{width: '100%', paddingLeft:'20%', paddingTop:'10%'}}> <img src="https://homepageonline.co.uk/wp-content/uploads/2018/11/click-homepage-online-estate-agents-ni-limavady-derry-londonderry-property-sales-logo-850x264.jpg" alt="" /></div>
           {/* <button onClick={addcart}>Add to product to your cart</button> */}
           <br />
           
           {isuserlogin ? 
           
           <button style={{width:'10%' , padding:'0.8%' , marginLeft :'45%' , backgroundColor : '#1c283e' , fontSize : '18px' , fontWeight:'bold' , color:'#15edfc' , border :'none'  , marginTop : '50px' , cursor :'pointer' , borderRadius :'15px' }} onClick={() => logout()}>Logout</button> 
           
           : 
           
           <button style={{width:'10%' , padding:'0.8%' , marginLeft :'45%' , backgroundColor : '#1c283e' , fontSize : '18px' , fontWeight:'bold' , color:'#15edfc' , border :'none'  , marginTop : '50px' , cursor :'pointer' , borderRadius :'15px' }} onClick={() => router('/login')}>Login</button>}
           
        </div>
    )


}

export default Home;