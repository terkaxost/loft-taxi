import React from 'react';
import { LoginPage } from './LoginPage';
import { render } from '@testing-library/react';

describe ("LoginPage", () => {
    it("render correctly", () => {
        const {container} = render(<LoginPage pageChange={ () => null }/>);
        expect(container.innerHTML).toMatch("Войти");
    });
});