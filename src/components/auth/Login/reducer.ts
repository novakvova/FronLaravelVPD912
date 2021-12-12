import { AuthState, AuthAction, AuthActionTypes } from './types';

const initState : AuthState = {
    user: null,
    isAuth: false,
    // user: {
    //     email: "slavik@gmail.com"
    // },
    // isAuth: true
}

export const authReducer = (state=initState, action: AuthAction) : AuthState => {
    switch(action.type)
    {
        case AuthActionTypes.LOGIN: {
            return {
                ...state,
                isAuth: true,
                user: action.payload
            }
        }
        case AuthActionTypes.LOGOUT: {
            return {
                ...state,
                isAuth: false,
                user: null
            }
        }
        default: 
            return state;
    }
}