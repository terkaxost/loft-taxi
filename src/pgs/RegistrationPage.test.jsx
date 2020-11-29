import React from 'react'
import RegistrationPage from './RegistrationPage'
import { render } from '@testing-library/react'

describe ("RegistrationPage", () => {
    it("render correctly", () => {
        const {container} = render(<RegistrationPage />)
        expect(container.innerHTML).toMatch("Войти")

        // const { getByLabelText } = render(<PageRegistration />)

        // expect(getByLabelText('Email:').toHaveAttribute('name','email'))
        // expect(getByLabelText('Passwrod:').toHaveAttribute('name','password'))
    })
})