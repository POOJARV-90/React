//581722904885-nmo8vn0eu5t9g8616v36imk2r3fbo8c8.apps.googleusercontent.com -ID
// secrete//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
import React from 'react'
import { GoogleLogin } from 'react-google-login'
const clientId = "581722904885-nmo8vn0eu5t9g8616v36imk2r3fbo8c8.apps.googleusercontent.com";



const Glogin = () => {
    const onSuccess=(res)=>{
        console.log("Login Success! Current User : ",res.profileObj)
    }
    const onFailure=(res)=>{
        console.log("Login Failed!",res)
    }

  return (
    <div id="signButton">
            <GoogleLogin
                clientId={clientId}
                buttonText={'Login'}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
  )
}

export default Glogin