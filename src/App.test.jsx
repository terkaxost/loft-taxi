import React from "react";
import ReactDOM from 'react-dom';
import { App, Context } from "./App";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

jest.mock("./pgs/LoginPage", () => ({ LoginPage: () => <div>LoginPage content</div> }));
jest.mock("./pgs/RegistrationPage", () => ({ RegistrationPage: () => <div>RegistrationPage content</div> }));
jest.mock("./pgs/ProfilePage", () => ({ ProfilePage: () => <div>ProfilePage content</div> }));
jest.mock("./pgs/OrderPage", () => ({ OrderPage: () => <div>OrderPage content</div> }));

describe("App", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    describe("when clicked on navigation buttons", () => {        
        it("opens the correct default page ", () => {
            const { container } = render(<App />);
            expect(container.innerHTML).toMatch("LoginPage content");
        });
        it("opens the corresponding page", () => {
            const { getByText, container } = render(<App />);
            fireEvent.click( getByText("RegistrationPage") );
            expect(container.innerHTML).toMatch("RegistrationPage content");
            fireEvent.click( getByText("ProfilePage") );
            expect(container.innerHTML).toMatch("ProfilePage content");
            fireEvent.click( getByText("OrderPage") );
            expect(container.innerHTML).toMatch("OrderPage content");
            fireEvent.click( getByText("LoginPage") );
            expect(container.innerHTML).toMatch("LoginPage content");
            });
    });
});

// why value is undefined into Context.Consumer
// describe("AuthContext", () => {
//     let isLoggedIn;
//     let logIn;
//     let logOut;
//     render(
//         <App>
//             <Context.Consumer>
//                 {(value) => {
//                     isLoggedIn = value.getIsLoggedIn;
//                     logIn = value.logIn;
//                     logOut = value.logOut;
//                     return null
//                 }}
//             </Context.Consumer>
//         </App>
//     )
//     it("sets isLoggedIn to false default", () => {        
//         expect(isLoggedIn).toBe(false);
//     });
//     it("sets isLoggedIn to true after logIn with correct login and password", () => {
//         act( () => {logIn("q", "q")} );
//         expect(isLoggedIn).toBe(true);
//     });
//     it("sets isLoggedIn to false after logOut", () => {
//         act( () => {logOut()} );
//         expect(isLoggedIn).toBe(false);
//     });
// });