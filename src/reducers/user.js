import { USER_NEW_SUCCESS, USER_NEW_DENY, USER_TOKEN } from '../actions/user';
import { store } from '../redux/store'

const userInitialState = {
    email: "userEmail",
    password: "userPassword",
    name: "userName",
    sername: "userSername",
    token: "token",
    success: false,
    error: ""
}

export function userReducer (state = userInitialState, action) {
    switch (action.type) {
        case USER_NEW_SUCCESS:
            return {...state, 
                email: action.payload.email,
                password: action.payload.password,
                name: action.payload.name,
                sername: action.payload.sername,
                token: action.payload.token,
                success: true, 
                error: ""
            }
        case USER_NEW_DENY:
            return {...state, success: false, error: action.payload}
        case USER_TOKEN:
            return {...state, token: action.payload }
        default:
            return state;
    }
}