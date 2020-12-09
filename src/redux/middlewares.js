import { AUTH_FETCH, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_DENY } from '../actions/auth';
import { USER_FETCH, USER_NEW_SUCCESS, USER_NEW_DENY, USER_TOKEN } from '../actions/user';
import { CARD_FETCH, CARD_ADD_SUCCESS, CARD_ADD_DENY } from '../actions/card';
import { serverLogin, serverUser, serverCard } from './api';

export const middlewares = (store) => (next) => async (action) => {
    if (action.type === AUTH_FETCH) {
        const {email, password} = action.payload;
        const {success, token, error} = await serverLogin(email, password);
        if (success) {
            store.dispatch( {type: AUTH_LOGIN_SUCCESS} );
            store.dispatch( {type: USER_TOKEN, payload: token} );
        } else {
            store.dispatch( {type: AUTH_LOGIN_DENY, payload: error} );
        }
    } 
    if (action.type === USER_FETCH) {
        const {email, password, name, surname} = action.payload;
        const {success, token, error} = await serverUser(email, password, name, surname);
        success 
            ? store.dispatch( {type: USER_NEW_SUCCESS, payload: {email, password, name, surname, token} } ) 
            : store.dispatch( {type: USER_NEW_DENY, payload: error} );
    }
    if (action.type === CARD_FETCH) {
        const {cardNumber, expiryDate, cardName, cvc, token} = action.payload;
        const {success, error} = await serverCard(cardNumber, expiryDate, cardName, cvc, token);
        success 
            ? store.dispatch( {type: CARD_ADD_SUCCESS, payload: {cardNumber, expiryDate, cardName, cvc} } ) 
            : store.dispatch( {type: CARD_ADD_DENY, payload: error} );
    }

    return next(action)
}