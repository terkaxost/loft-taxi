import React from 'react';
import ReactDOM from 'react-dom';
import { LoginPage } from './LoginPage';
import { render } from '@testing-library/react';
import { Context } from '../App';

describe ("LoginPage", () => {
    const WrapperLoginPage = () => (
        <Context.Provider value={ {logIn: null, logOut: null, getIsLoggedIn: false} }>
            <Context.Consumer>    
                { () => <LoginPage pageChange={ () => null } /> }
            </Context.Consumer>
        </Context.Provider>
    )
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<WrapperLoginPage />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});