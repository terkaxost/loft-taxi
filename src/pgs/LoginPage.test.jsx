import React from 'react';
import ReactDOM from 'react-dom';
import { LoginPage } from './LoginPage';
import RegistrationPage from './RegistrationPage';
// import { render, fireEvent } from '@testing-library/react';
import { render, fireEvent } from 'react-testing-library';


describe("LoginPage", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<LoginPage />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it("has own tytle", () => {
        const { container } = render(<loginPage />);
        expect( container.innerHTML ).toMatch("Войти");
    }); 
    it("has input with attribute", () => {
        const { getByLabelText } = render(<LoignPage />)
        expect(getByLabelText('Пароль *').toHaveAttribute('name', 'password'))  
    });
    it("has button which works like link", () => {
        const { getByText, containerFrom } = render(<LoginPage />);
        const { containerTo } = render(<RegistrationPage />);
        fireEvent.click( getByText("Зарегистрируйтесь") )
        expect( containerTo.innerHTML ).toMatch("Профиль")
    });
});