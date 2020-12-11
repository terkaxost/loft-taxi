import React from 'react';
import './index.css';
import { LoginPage, LoginConfirm } from './pgs/LoginPage';
import { RegistrationPage, RegistrationConfirm } from './pgs/RegistrationPage';
import { ProfilePage, ProfileConfirm } from './pgs/ProfilePage';
import { OrderPage, OrderConfirm } from './pgs/OrderPage';
import { Map } from './pgs/Map';
import { Route, Switch, Redirect, BrowserRouter, Link } from 'react-router-dom'; 
import { useSelector } from 'react-redux';

export function InsideComponent() {
    return (<>
        <div>Some text in inside component</div>
    </>)
}
export function OutsideComponent() {
    return (<>
        <div>Some text in outside component</div>
        <InsideComponent />
    </>)
}

export function App() {
    const isLoggedIn = useSelector( (state) => state.auth.isLoggedIn );
    const error = useSelector( (state) => state.auth.error );

    return (<>
        <BrowserRouter>
            <div style={{position: "absolute"}}>
                <Link to="/login">LoginPage</Link>
                <Link to="/registration">RegistrationPage</Link>
                <Link to="/order">OrderPage</Link>
                <Link to="/profile">ProfilePage</Link>
            </div>
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
    </>)
}