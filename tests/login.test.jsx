import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  vi,
  it,
} from "vitest";
import { fireEvent, screen, waitFor } from "@testing-library/react";

import { renderWithUser } from "./utils";

import LoginForm from "../src/pages/Login";

describe("Integration | Component | Login", () => {
  const setItemSpy = vi.spyOn(Storage.prototype, "setItem");

  let originalFetch;

  const MOCK_ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

  beforeAll(() => {
    vi.mock("next/router", () => require("next-router-mock"));
  });

  beforeEach(() => {
    originalFetch = global.fetch;

    global.fetch = vi.fn(() =>
      Promise.resolve({
        status: 200,
        statusText: "OK",
        ok: true,
        json: () =>
          Promise.resolve({
            name: "name",
            email: "first.last@stud.noroff.no",
            avatar: null,
            accessToken: MOCK_ACCESS_TOKEN,
          }),
      })
    );
  });

  afterEach(() => {
    localStorage.clear();
    // getItemSpy.mockClear();
    // setItemSpy.mockClear();

    global.fetch = originalFetch;
  });

  describe("Login", () => {
    const TEST_EMAIL = "first.last@stud.noroff.no";
    const TEST_PASSWORD = "UzI1NiIsInR5cCI";

    it("Fetches and stores a token in local storage", async () => {
      const { user } = renderWithUser(<LoginForm />);

      const emailInput = await screen.findByLabelText("Email");
      const passwordInput = await screen.findByLabelText("Password");

      expect(emailInput).toBeInTheDocument;

      await user.type(emailInput, TEST_EMAIL);
      await user.type(passwordInput, TEST_PASSWORD);

      const submitBtn = await screen.findByText("Login");
      await fireEvent.click(submitBtn);

      waitFor(() => {
        expect(setItemSpy).toHaveBeenCalledWith(
          "access_token",
          MOCK_ACCESS_TOKEN
        );
      });
    });
  });
});
