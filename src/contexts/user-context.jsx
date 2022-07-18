import { createContext, useEffect, useReducer } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

const USER_AUTHENTICATION = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    switch(action.type){
        case USER_AUTHENTICATION.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: action.payload
            }
        default :
            throw new Error(`Unhandled type ${action.type} is Invailid`)
    }
}

const initialState = {
    currentUser:null
}

export const UserProvider = ({children}) => {
const [{currentUser}, dispatch] = useReducer(  userReducer, initialState)
    
    const setCurrentUser = (user) => {
        dispatch(createAction(USER_AUTHENTICATION.SET_CURRENT_USER,user))
    }
    const value = {currentUser, setCurrentUser}
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user){
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        })
        return unsubscribe;
    },[])

    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}