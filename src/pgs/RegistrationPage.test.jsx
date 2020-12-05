import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationPage from './RegistrationPage';
import { fireEvent, render } from '@testing-library/react';
// import { render } from 'react-testing-library';
import { Context } from '../App';
// import { act } from 'react-dom/test-utils';

// describe("RegistrationPage", () => {
//     it("renders without crashing", () => {
//         const div = document.createElement("div");
//         ReactDOM.render(<RegistrationPage pageChange={ () => null } />, div);
//         ReactDOM.unmountComponentAtNode(div);
//     });
//     it("renders correctly", () => {
//         const { container } = render(<RegistrationPage pageChange={ () => null } />);
//         expect( container.innerHTML ).toMatch("Регистрация");
//     });
    // it("includes inputs with attributes", () => {
    //     const { getByLabelText } = render(<RegistrationPage pageChange={ () => null } />)
    //     expect(getByLabelText('Имя пользователя *').toHaveAttribute('name', 'login'))
    //     expect(getByLabelText('Пароль *').toHaveAttribute('name', 'password'))  
    // });
    // it("has button which work with function from props", () => {
    //     const { getByText, container } = render(<RegistrationPage pageChange={ () => null } />);
    //     fireEvent.click( getByText("Зарегистрироваться") )
    //     expect( container.innerHTML ).toMatch("Профиль")
    // });
// });

// to move at App.test 
describe("AuthContext", () => {
    describe("#logIn", () => {
        it("sets isLoggedIn to false", () => {
            let isLoggedIn;
            let logIn;

            render(
                <Context.Provider>
                    <Context.Consumer>
                        {(value) => {
                            isLoggedIn = value.isLoggedIn;
                            logIn = value.login;
                            return null
                        }}
                    </Context.Consumer>
                </Context.Provider>
            )

            expect(isLoggedIn).toBe(false)
        });
    });
});