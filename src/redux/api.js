
//export const serverLogin = async (email, password) => {
//     return fetch(`https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`)
//             .then(responce => responce.json() )
//             .then(data => data)
// }

export const serverLogin = async (email, password) => {
    return fetch(            
        `https://loft-taxi.glitch.me/auth?`, { 
            method: 'POST', 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify( {email, password} )
        })
        .then(responce => responce.json() )
}

export const serverUser = async (email, password, name, surname) => {
    return fetch(            
        `https://loft-taxi.glitch.me/register?`, { 
            method: 'POST', 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify( {email, password, name, surname} )
        })
        .then(responce => responce.json() )
}

export const serverCard = async (cardNumber, expiryDate, cardName, cvc, token) => {
    return fetch(            
        `https://loft-taxi.glitch.me/card?`, { 
            method: 'POST', 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify( {cardNumber, expiryDate, cardName, cvc, token} )
        })
        .then(responce => responce.json() )
}