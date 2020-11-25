import React from 'react'
import PageRegistration from './PageRegistration'
import {render} from '@testing-library/react'

describe ("PageRegistration", () => {
    it("render correctly", () => {
        const {container} = render(<PageRegistration />)
        expect(container.innerHTML).toMatch("PageRegistration")

        // const { getByLabelText } = render(<PageRegistration />)

        // expect(getByLabelText('Email:').toHaveAttribute('name','email'))
        // expect(getByLabelText('Passwrod:').toHaveAttribute('name','password'))
    })
})