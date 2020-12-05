import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { App } from "./App";

jest.mock("./pgs/LoginPage", () => ({ LoginPage: () => <div>LoginPage content</div> }));
jest.mock("./pgs/RegistrationPage", () => ({ RegistrationPage: () => <div>RegistrationPage content</div> }));
// jest.mock("./pgs/ProfilePage", () => ({ ProfilePage: () => <div>ProfilePage content</div> }));
// jest.mock("./pgs/OrderPage", () => ({ OrderPage: () => <div>OrderPage content</div> }));

describe("App", () => {
  describe("when clicked on navigation buttons", () => {
    it("opens the corresponding page", () => {
      const { getByText, container } = render(<App />);

      fireEvent.click(getByText("LoginPage"));
      expect(container.innerHTML).toMatch("LoginPage");
      
      fireEvent.click(getByText('RegistrationPage'));
      expect(container.innerHTML).toMatch("RegistrationPage");
    });
  });
});