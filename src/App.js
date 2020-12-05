import React, { createContext, useState } from 'react';
import './index.css';
import { LoginPage } from './pgs/LoginPage';
import RegistrationPage from './pgs/RegistrationPage';
import { ProfilePage } from './pgs/ProfilePage';
import { OrderPage } from './pgs/OrderPage';
import { Map } from './pgs/Map';

export const Context = createContext();

export function App() {
    const [getCurrentPageName, setCurrentPageName] = useState("LoginPage");
    const [getIsLoggedIn, setIsLoggedIn] = useState(false);
    
    const onPageChange = (name) => {
        setCurrentPageName(name);
    }
    const pageComponents = {
        LoginPage: <LoginPage pageChange={ onPageChange } />,
        RegistrationPage: <RegistrationPage pageChange={ onPageChange } />,
        ProfilePage: <ProfilePage pageChange={ onPageChange } />,
        OrderPage: <OrderPage pageChange={ onPageChange } />
    }
    const logIn = (email, password) => {
        if (email !== 'q' || password !== 'q') {
            return false;
        }
        setIsLoggedIn(true);
        
        return true;
    }
    const logOut = () => {
        setIsLoggedIn(false);
    }

    return (
        <Context.Provider value={ {logIn, logOut, getIsLoggedIn} }>
            <Map />
            { pageComponents[getCurrentPageName] }
        </Context.Provider>
    )
}