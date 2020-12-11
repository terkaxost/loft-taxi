import React from 'react';
import ReactDOM from 'react-dom';
import { LoginPage } from './LoginPage';
import { render } from '@testing-library/react';
import { Context } from '../App'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

describe ("LoginPage", () => {
    const WrapperLoginPage = () => (
        <Provider store={store}>
            <BrowserRouter>
                <LoginPage />                
            </BrowserRouter>
        </Provider>
    )
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<WrapperLoginPage />, div);
        ReactDOM.unmountComponentAtNode(div);
    });    
});