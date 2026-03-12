import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeToggle from "@components/ui/ThemeToggle";

// Mockeando los SVG para que no fallen en jsdom
vi.mock("@assets/icons/Sun", () => ({
  default: () => <span data-testid="icon-sun" />
}));

vi.mock("@assets/icons/Moon", () => ({
  default: () => <span data-testid="icon-moon" />
}));

// Mockeando setTheme para verificar que se llama correctamente
vi.mock("@utils/dark-mode", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@utils/dark-mode")>();
  return {
    ...actual,
    setTheme: vi.fn(),
  };
});

import { setTheme } from "@utils/dark-mode";

describe("ThemeToggle", () => {

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the Sun icon by default (dark theme)", () => {
    render(<ThemeToggle />);
    expect(screen.getByTestId("icon-sun")).toBeInTheDocument();
  });

  it("should switch to Moon icon when clicked", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.click(screen.getByRole("button"));

    expect(screen.getByTestId("icon-moon")).toBeInTheDocument();
  });

  it("should call setTheme with light when clicked from dark", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.click(screen.getByRole("button"));

    expect(setTheme).toHaveBeenCalledWith("light");
  });

  it("should call setTheme with dark when clicked twice", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.click(screen.getByRole("button"));
    await user.click(screen.getByRole("button"));

    expect(setTheme).toHaveBeenLastCalledWith("dark");
  });

});