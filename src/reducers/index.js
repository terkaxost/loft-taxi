import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { userReducer } from './user';
import { cardReducer } from './card';

export default combineReducers({
    auth: authReducer,
    user: userReducer,
    card: cardReducer
})