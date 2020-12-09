import { CARD_ADD_SUCCESS, CARD_ADD_DENY } from '../actions/card';
import { store } from '../redux/store'

const cardInitialState = {
    cardNumber: "0000 0000 0000 0000", 
    expiryDate: "MM/YY", 
    cardName: "CARD NAME", 
    cvc: "000", 
    success: false,
    error: ""
}

export function cardReducer (state = cardInitialState, action) {
    switch (action.type) {
        case CARD_ADD_SUCCESS:
            return {
                ...state, 
                cardNumber: action.payload.cardNumber, 
                expiryDate: action.payload.expiryDate,
                cardName: action.payload.cardName, 
                cvc: action.payload.cvc, 
                success: true, 
                error: ""
            }
        case CARD_ADD_DENY:
            return {...state, success: false, error: action.payload}
        default:
            return state;
    }
}