import { AUTH_LOGIN_SUCCESS, AUTH_LOGIN_DENY, AUTH_LOGOUT } from '../actions/auth';

const authInitialState = {
    isLoggedIn: false,
    error: ""
}

export function authReducer (state = authInitialState, action) {
    switch (action.type) {
        case AUTH_LOGIN_SUCCESS:
            return {...state, isLoggedIn: true, error: ""}
        case AUTH_LOGIN_DENY:
            return {...state, isLoggedIn: false, error: action.payload}
        case AUTH_LOGOUT:
            return {...state, isLoggedIn: false, error: ""}
        default:
            return state;
    }
}