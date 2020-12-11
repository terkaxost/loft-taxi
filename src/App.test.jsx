import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import { App, OutsideComponent, InsideComponent } from './App';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { shallow } from 'enzyme';
import { LoginPage } from './pgs/LoginPage'

jest.mock("./pgs/LoginPage", () => ({ 
    LoginPage: () => <div>LoginPage content</div>, 
    LoginConfirm: () => <div>LoginConfirm content</div> 
}));
jest.mock("./pgs/RegistrationPage", () => ({ 
    RegistrationPage: () => <div>RegistrationPage content</div>,
    RegistrationConfirm: () => <div>RegistrationConfirm content</div> 
}));
jest.mock("./pgs/ProfilePage", () => ({ 
    ProfilePage: () => <div>ProfilePage content</div>,
    ProfileConfirm: () => <div>ProfileConfirm content</div> 
}));
jest.mock("./pgs/OrderPage", () => ({ 
    OrderPage: () => <div>OrderPage content</div>,
    OrderConfirm: () => <div>OrderConfirm content</div>
}));
jest.mock("./pgs/Map", () => ({ Map: () => <div>Map content</div> }));

describe("App", () => {
    const mockStore = {
        getState: () => ({ auth: {isLoggedIn: true, error: ""} }),
        subscribe: () => {},
        dispatch: () => {}
    };
    const history = createMemoryHistory();
    const WrapperApp = () => (
        <Router history={history}>
            <Provider store={mockStore}>
                <App />
            </Provider>
        </Router>
    )  
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render( <WrapperApp />, div );
        ReactDOM.unmountComponentAtNode(div);
    });
    describe("when clicked on navigation buttons", () => {        
        it("opens the corresponding page", () => {
            const { getByText, container } = render( <WrapperApp /> );
            fireEvent.click( getByText("RegistrationPage") );
            expect(container.innerHTML).toMatch("RegistrationPage content");
            fireEvent.click( getByText("ProfilePage") );
            expect(container.innerHTML).toMatch("ProfilePage content");
            fireEvent.click( getByText("OrderPage") );
            expect(container.innerHTML).toMatch("OrderPage content");
            fireEvent.click( getByText("LoginPage") );
            expect(container.innerHTML).toMatch("LoginPage content");
        });
    });
});