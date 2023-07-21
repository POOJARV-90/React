import { createContext, useEffect, useReducer } from "react";

export const Authcontext = createContext();

const incialState = { user: null };

function reducer(state, action) {

  switch (action.type) {
    case "login":
      return { user: action.payload };

    case "logout":
      return { user: null };
    default:
      return state;
  }
  
}


const AuthProvider = ({children}) => {
    const [state , dispatch] = useReducer(reducer,incialState);

    const login = (userData) => {
      localStorage.setItem(("CurrentUser"),JSON.stringify(userData));

        dispatch({
            type :'login',
            payload:userData
        })
    }

    const logout =(userData) => {
      localStorage.removeItem("CurrentUser")
        dispatch({
            type : 'logout'
        })
    }

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("CurrentUser"));
      if (user) {
          dispatch({
              type: 'login',
              payload: user
          })
      }
  }, [])

    return (
        <Authcontext.Provider value={{state,login,logout}}>
         {children}
        </Authcontext.Provider>

    )
}

export default AuthProvider;