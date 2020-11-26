import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

// jest.mock("./LoginPage", () => ({ LoginPage: () => <div>LoginPage content</div> }));
// jest.mock("./RegistrationPage", () => ({ RegistrationPage: () => <div>RegistrationPage content</div> }));
// jest.mock("./ProfilePage", () => ({ ProfilePage: () => <div>ProfilePage content</div> }));
// jest.mock("./OrderPage", () => ({ OrderPage: () => <div>OrderPage content</div> }));

// describe("App", () => {
//   describe("when clicked on navigation buttons", () => {
//     it("opens the corresponding page", () => {
//       const { getByText, container } = render(<App />);
//       fireEvent.click(getByText('About'));
//       expect(container.innerHTML).toMatch("About content");
//       fireEvent.click(getByText('Profile'));
//       expect(container.innerHTML).toMatch("Profile content");
//     });
//   });
// });