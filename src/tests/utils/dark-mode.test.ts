import { describe, it, expect, beforeEach } from "vitest";
import { setTheme, getTheme } from "@utils/dark-mode";

describe("Dark mode utils test", () => {
  beforeEach(() => {
    document.documentElement.removeAttribute("data-theme");
  });

  describe("setTheme", () => {
    it("should set data-theme to dark", () => {
      setTheme("dark");
      expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    });

    it("should set data-theme to light", () => {
      setTheme("light");
      expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    });

    it("should overwrite the previous theme", () => {
      setTheme("dark");
      setTheme("light");
      expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    });
  });

  describe("getTheme", () => {
    it("should return light by default when no attribute is set", () => {
      expect(getTheme()).toBe("light");
    });

    it("should return dark when data-theme is dark", () => {
      setTheme("dark");
      expect(getTheme()).toBe("dark");
    });

    it("should return light when data-theme is light", () => {
      setTheme("light");
      expect(getTheme()).toBe("light");
    });
  });
});
