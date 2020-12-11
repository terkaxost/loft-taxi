import React from 'react';
import ReactDOM from 'react-dom';
import { RegistrationPage } from './RegistrationPage';
import { render } from '@testing-library/react';

describe("RegistrationPage", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<RegistrationPage pageChange={ () => null } />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it("has correct header ", () => {
        const { container } = render(<RegistrationPage pageChange={ () => null } />);
        expect( container.innerHTML ).toMatch("Регистрация");
    });
    it("can find link by test id", () => {
        const { getByTestId } = render(<RegistrationPage pageChange={ () => null } />);
        expect( getByTestId("link") ).not.toBeFalsy()
    });
    it("has link without path", () => {
        const { getByTestId } = render(<RegistrationPage pageChange={ () => null } />);
        expect( getByTestId("link") ).toHaveAttribute('href', '#');
    });
    it("has link with correct text", () => {
        const { getByTestId } = render(<RegistrationPage pageChange={ () => null } />);
        expect( getByTestId("link").textContent ).toBe("Авторизоваться");
    });
    it("has same link, which was finded by id and by text inside", () => {
        const { getByTestId, getByText } = render(<RegistrationPage pageChange={ () => null } />);
        expect( getByTestId("link") ).toBe( getByText("Авторизоваться") );
    });
});