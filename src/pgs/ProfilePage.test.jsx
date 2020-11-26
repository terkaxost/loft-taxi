import React from 'react'
import { ProfilePage } from './ProfilePage'
import { render } from '@testing-library/react'

describe("ProfilePage", () => {
    it("renders correctly", () => {
        const {container} = render(<ProfilePage />)
        expect(container.innerHTML).toMatch("ProfilePage")
    })
})