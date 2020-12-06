import React, { createContext, useState } from 'react';
import './index.css';
import { LoginPage } from './pgs/LoginPage';
import RegistrationPage from './pgs/RegistrationPage';
import { ProfilePage, ProfileConfirm } from './pgs/ProfilePage';
import { OrderPage, OrderConfirm } from './pgs/OrderPage';
import { Map } from './pgs/Map';
import { Route, Link, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from './actions';


export const Context = createContext();

export function App() {
    const [getIsLoggedIn, setIsLoggedIn] = useState(false);
    const [getLoginErrorText, setLoginErrorText] = useState("");
    
    const logIn = (email, password) => {
        if (email !== 'q' || password !== 'q') {
            setIsLoggedIn(false);
            setLoginErrorText("Проверьте имя пользователя / пароль");
            return false
        }
        setIsLoggedIn(true);
        setLoginErrorText("");
        return true
    }
    const logOut = () => {
        setIsLoggedIn(false);
    }

    return (
        <Context.Provider value={ {logIn, logOut, getIsLoggedIn} }>
            <Map />
            <Switch>
                <Route path="/login"><LoginPage errorText={getLoginErrorText}/></Route>
                <Route path="/registration"><RegistrationPage /></Route>                
                { getIsLoggedIn ? (<>
                    <Route path="/order" exact><OrderPage /></Route>
                    <Route path="/order/confirm" exact><OrderConfirm /></Route>
                    <Route path="/profile" exact><ProfilePage /></Route>
                    <Route path="/profile/confirm"><ProfileConfirm /></Route>
                </>) : <Redirect to="/login" /> }
                <Redirect to="/login" />
            </Switch>
            {/* for App.route, del before push */}
            <div style={{position: "absolute" }}>
                <Link to="/login" >LoginPage</Link>
                <Link to="/registration" >RegistrationPage</Link>
                <Link to="/order" >OrderPage</Link>
                <Link to="/order/confirm" >OrderConfirm</Link>
                <Link to="/profile" >ProfilePage</Link>
                <Link to="/profile/confirm" >ProfileConfirm</Link>
                <button onClick={ () => logIn("q", "q") }>LogIn</button>
                <button onClick={ () => logOut() }>LogOut</button>
            </div>
        </Context.Provider>
    )

    // return (
    //     <>
    //         <Map />
    //         { pageComponents[getCurrentPageName] }
    //     </>
    // )
}

// export const App = connect(
//     (state) => {
//         console.log(state)
//         return ({someFromStore: state.auth.isLoggedIn})
//     },
//     { logIn }
// )(AppWithoutStore);