import React from 'react'
import {PageProfile} from './PageProfile'
import {render} from '@testing-library/react'

describe("PageProfile", () => {
    it("renders correctly", () => {
        const {container} = render(<PageProfile />)
        expect(container.innerHTML).toMatch("PageProfile")
    })
})