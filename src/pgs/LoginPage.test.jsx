import React from 'react'
import LoginPage from './LoginPage'
import { render } from '@testing-library/react'

describe ("LoginPage", () => {    
    it("render correctly", () => {
        const {container} = render(<LoginPage />)
        expect(container.innerHTML).toMatch("Имя пользователя")
    })
    it("includes inputs with attributes", () => {
        const { getByLabelText } = render(<LoginPage page={ {header: "Авторозация"} }/>)
        expect(getByLabelText('Имя пользователя *').toHaveAttribute('name', 'login'))
        expect(getByLabelText('Пароль *').toHaveAttribute('name', 'password'))  
    })
})