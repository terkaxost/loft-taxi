export const USER_FETCH = "USER_FETCH";
export const USER_NEW_SUCCESS = "USER_NEW_SUCCESS";
export const USER_NEW_DENY = "USER_NEW_DENY";
export const USER_TOKEN = "USER_TOKEN";

export const userNew = (email, password, name, surname) => ({
    type: USER_FETCH, 
    payload: {email, password, name, surname}
})