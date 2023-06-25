import { useState } from "react";

function Section() {

    const [isUserLogged, setIsUserLogged] = useState(false);


    return (
        <div>
            Section : {isUserLogged ? <button>Logout</button> : <button>Login</button>}
        </div>
    )
}

export default Section;