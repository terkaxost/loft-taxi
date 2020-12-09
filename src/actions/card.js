export const CARD_FETCH = "CARD_FETCH";
export const CARD_ADD_SUCCESS = "CARD_ADD_SUCCESS";
export const CARD_ADD_DENY = "CARD_ADD_DENY";

export const cardAdd = (cardNumber, expiryDate, cardName, cvc, token) => ({
    type: CARD_FETCH, 
    payload: {cardNumber, expiryDate, cardName, cvc, token}
})