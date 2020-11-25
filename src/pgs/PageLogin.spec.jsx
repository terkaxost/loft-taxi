import React from 'react'
import PageLogin from './PageLogin'
import {render} from '@testing-library/react'

describe ("PageLogin", () => {    
    it("render correctly", () => {
        const { getByLabelText } = render(<PageLogin />)

        expect(getByLabelText('Имя пользователя *').toHaveAttribute('name', 'login'))
        expect(getByLabelText('Пароль *').toHaveAttribute('name', 'password'))
    })
})