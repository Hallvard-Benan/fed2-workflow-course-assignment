import { renderWithUser } from "./utils";

import Signout from "../src/pages/Signout";
import { afterEach, describe, expect, vi, it } from "vitest";
import { waitFor } from "@testing-library/react";

describe("Component | Logout", () => {
  const removeItemSpy = vi.spyOn(Storage.prototype, "removeItem");

  it("removes token from local storage", async () => {
    localStorage.setItem("access_token", "token");

    const token = await localStorage.getItem("access_token");

    renderWithUser(<Signout />);
    expect(localStorage.getItem("access_token")).toBe("token");
    console.log(localStorage.getItem("access_token"));

    await waitFor(() => {
      expect(removeItemSpy).toHaveBeenCalled();
      expect(localStorage.getItem("access_token")).toBeNull;
    });
  });
});
