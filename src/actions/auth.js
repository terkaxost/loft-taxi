export const AUTH_FETCH = "AUTH_FETCH";

export const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS";
export const AUTH_LOGIN_DENY = "AUTH_LOGIN_DENY";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

export const authLogin = (email, password) => ( {type: AUTH_FETCH, payload: {email, password}} )
export const authLogout = () => ( {type: AUTH_LOGOUT} )