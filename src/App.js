import React, { createContext, useState } from 'react';
import './index.css';
import { LoginPage, LoginConfirm } from './pgs/LoginPage';
import { RegistrationPage, RegistrationConfirm } from './pgs/RegistrationPage';
import { ProfilePage, ProfileConfirm } from './pgs/ProfilePage';
import { OrderPage, OrderConfirm } from './pgs/OrderPage';
import { Map } from './pgs/Map';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'; 
import { useSelector } from 'react-redux';

export const Context = createContext();

export function App() {
    const isLoggedIn = useSelector( (state) => state.auth.isLoggedIn );
    const error = useSelector( (state) => state.auth.error );

    return (
        <BrowserRouter>
            <Map />
            <Switch>
                <Route path="/login" exact><LoginPage error={error} /></Route>
                <Route path="/login/confirm"><LoginConfirm /></Route>
                <Route path="/registration" exact><RegistrationPage /></Route>
                <Route path="/registration/confirm"><RegistrationConfirm /></Route>
                { isLoggedIn 
                    ? (<>
                        <Route path="/order" exact><OrderPage /></Route>
                        <Route path="/order/confirm" exact><OrderConfirm /></Route>
                        <Route path="/profile" exact><ProfilePage /></Route>
                        <Route path="/profile/confirm"><ProfileConfirm /></Route>
                    </>) 
                    : <Redirect to="/login" /> }
                <Redirect to="/login" />
            </Switch>
        </BrowserRouter>
    )
}