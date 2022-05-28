import { cleanup, render, screen, fireEvent, } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AdminLoginForm from "./AdminLoginForm";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

beforeEach(cleanup);

test("Admin login form should not call on submit with empty fields", () => {
  const onSubmit = jest.fn();

  render(
    <BrowserRouter>
      <AdminLoginForm onSubmit={onSubmit} />
    </BrowserRouter>
  );

  let buttonElement = screen.getByTestId("login-button");
  fireEvent.click(buttonElement);
  expect(onSubmit).toHaveBeenCalledTimes(0);
});

test("Admin logi form should submit with email and login", () => {
  const onSubmit = jest.fn();

  render(
    <BrowserRouter>
      <AdminLoginForm onSubmit={onSubmit} />
    </BrowserRouter>
  );

  let buttonElement = screen.getByTestId("login-button");

  act(() => {
    let emailField = screen.getByTestId("email-field");
    fireEvent.change(emailField, { target: { value: "admin@gmail.com" } });

    let passwordField = screen.getByTestId("password-field");
    fireEvent.change(passwordField, { target: { value: "12312312" } });
  });

  fireEvent.click(buttonElement);

  expect(onSubmit).toHaveBeenCalledTimes(0);
});
