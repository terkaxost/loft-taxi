import { middlewares } from './middlewares';
import { authLogin } from '../actions/auth';
import { serverLogin } from './api';

jest.mock("./api", () => ({serverLogin: jest.fn( () => ({success: true, token: "", error: ""}) ) })  )

describe("middlewares", () => {
    describe("AUTH_FETCH", () => {
        it("authenticates through api", async () => {
            const dispatch = jest.fn()

            await middlewares({dispatch})()(
                authLogin("testlogin", "testpassword")
            )

            expect(serverLogin).toBeCalledWith("testlogin", "testpassword")
            expect(dispatch).toBeCalledWith( {type: "AUTH_FETCH"} )
        } )
    } )
} )