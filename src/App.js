import React from 'react';
import './index.css';
import LoginPage from './pgs/LoginPage';
import RegistrationPage from './pgs/RegistrationPage';
import ProfilePage from './pgs/ProfilePage';
import OrderPage from './pgs/OrderPage';
import { Map } from './pgs/Map';

export const Context = React.createContext();

export function AppAuth() {
    const [getCurrentPageName, setCurrentPageName] = React.useState("LoginPage");
    let [getIsLoggedIn, setIsLoggedIn] = React.useState(false);
    
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
            <div style={ {zIndex: 1, position: "absolute"} }>
                <Map />
            </div>
            <div style={ {zIndex: 2, position: "absolute"} }>
                { pageComponents[getCurrentPageName] }
            </div>
        </Context.Provider>
    )
}