import React from 'react'
import { GoogleLogout } from 'react-google-login'
const clientId = "581722904885-nmo8vn0eu5t9g8616v36imk2r3fbo8c8.apps.googleusercontent.com";
const Glogout = () => {
    const onSuccess=()=>{
        console.log("Logout successfull!!")
    }
    return (
        <div id="signButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={'Logout'}
                onLogoutSuccess={onSuccess}
               
            />
        </div>
    )
}

export default Glogout