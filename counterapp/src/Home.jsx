import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
function Home(){ 
    const [isuserlogin , setisUserlogin] = useState(false)
    const router  = useNavigate();
    const goto =  useNavigate();

    useEffect(()=>{
        var user = JSON.parse(localStorage.getItem("CurrentUser"));
        console.log(user);
        if (user){setisUserlogin(true);}
        
    }, [])

    
    function addcart () {
        if(isuserlogin){
            alert("You are logged in can cart product")
            goto('/ProductsFromBackend')
        }else{
            alert("Please login into your account")
        }
    }


    return(
        <div>
          <div style={{width: '100%', paddingLeft:'20%', paddingTop:'10%'}}> <img src="https://homepageonline.co.uk/wp-content/uploads/2018/11/click-homepage-online-estate-agents-ni-limavady-derry-londonderry-property-sales-logo-850x264.jpg" alt="" /></div>
           <button onClick={addcart}>Add to product to your cart</button>
           
        </div>
    )


}

export default Home;