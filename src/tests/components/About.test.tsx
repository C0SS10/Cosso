import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "@components/sections/About";

vi.mock("@/assets/icons/LinkedIn", () => ({
  LinkedIn: () => <span data-testid="icon-linkedin" />
}));

vi.mock("@/assets/icons/Email", () => ({
  Email: () => <span data-testid="icon-email" />
}));

vi.mock("@/assets/icons/GitHub", () => ({
  GitHub: () => <span data-testid="icon-github" />
}));

vi.mock("@components/ui/NeumorphCard", () => ({
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}));

describe("About", () => {

  it("should render the profile picture", () => {
    render(<About />);
    const img = screen.getByAltText("Profile picture of Esteban");
    expect(img).toBeInTheDocument();
  });

  it("should render the name", () => {
    render(<About />);
    expect(screen.getByText("Esteban Cossio")).toBeInTheDocument();
  });

  it("should render the job title", () => {
    render(<About />);
    expect(screen.getByText("Ingeniero de Sistemas")).toBeInTheDocument();
  });

  it("should render the bio", () => {
    render(<About />);
    expect(screen.getByText(/Desarrollador full-stack/i)).toBeInTheDocument();
  });

  describe("socials", () => {

    it("should render 3 social links", () => {
      render(<About />);
      const links = screen.getAllByRole("link");
      expect(links).toHaveLength(3);
    });

    it("should render LinkedIn link with correct href", () => {
      render(<About />);
      const linkedin = screen.getByTestId("icon-linkedin").closest("a");
      expect(linkedin).toHaveAttribute("href", "https://www.linkedin.com/in/esteban-cg/");
    });

    it("should render GitHub link with correct href", () => {
      render(<About />);
      const github = screen.getByTestId("icon-github").closest("a");
      expect(github).toHaveAttribute("href", "https://www.github.com/C0SS10");
    });

    it("should render email link with correct href", () => {
      render(<About />);
      const email = screen.getByTestId("icon-email").closest("a");
      expect(email).toHaveAttribute("href", "mailto:esteban.codev@gmail.com");
    });

    it("should open social links in new tab", () => {
      render(<About />);
      const links = screen.getAllByRole("link");
      links.forEach(link => {
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
      });
    });

  });

});