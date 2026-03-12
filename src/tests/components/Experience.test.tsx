import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Experience from "@components/sections/Experience";

vi.mock("@/assets/icons/Python", () => ({ Python: () => <span data-testid="icon-python" /> }));
vi.mock("@/assets/icons/MongoDB", () => ({ MongoDB: () => <span data-testid="icon-mongodb" /> }));
vi.mock("@/assets/icons/Docker", () => ({ Docker: () => <span data-testid="icon-docker" /> }));
vi.mock("@/assets/icons/JMeter", () => ({ JMeter: () => <span data-testid="icon-jmeter" /> }));
vi.mock("@/assets/icons/ClickUp", () => ({ ClickUp: () => <span data-testid="icon-clickup" /> }));
vi.mock("@/assets/icons/OpenBook", () => ({ OpenBook: () => <span data-testid="icon-openbook" /> }));
vi.mock("@/assets/icons/Performance", () => ({ Performance: () => <span data-testid="icon-performance" /> }));

vi.mock("@components/ui/NeumorphCard", () => ({
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}));

describe("Experience", () => {

  it("should render the experience section", () => {
    render(<Experience />);
    expect(screen.getByRole("region", { name: "Experiencia laboral" })).toBeInTheDocument();
  });

  describe("ImpactU - Colav", () => {
    it("should render the company name", () => {
      render(<Experience />);
      expect(screen.getByText("ImpactU - Colav")).toBeInTheDocument();
    });

    it("should render the role", () => {
      render(<Experience />);
      expect(screen.getByText("Desarrollador Backend")).toBeInTheDocument();
    });

    it("should render the duration", () => {
      render(<Experience />);
      expect(screen.getByText("2025/10 - 2026/02").closest("time")).toBeInTheDocument();
    });

    it("should render Python, MongoDB and Docker icons", () => {
      render(<Experience />);
      expect(screen.getByTestId("icon-python")).toBeInTheDocument();
      expect(screen.getByTestId("icon-mongodb")).toBeInTheDocument();
      expect(screen.getByTestId("icon-docker")).toBeInTheDocument();
    });
  });

  describe("PlaceToPay - Evertec", () => {
    it("should render the company name", () => {
      render(<Experience />);
      expect(screen.getByText("PlaceToPay - Evertec")).toBeInTheDocument();
    });

    it("should render the role", () => {
      render(<Experience />);
      expect(screen.getByText("QA Student")).toBeInTheDocument();
    });

    it("should render the duration", () => {
      render(<Experience />);
      expect(screen.getByText("2024/06 - 2024/08").closest("time")).toBeInTheDocument();
    });

    it("should render JMeter and ClickUp icons", () => {
      render(<Experience />);
      expect(screen.getByTestId("icon-jmeter")).toBeInTheDocument();
      expect(screen.getByTestId("icon-clickup")).toBeInTheDocument();
    });
  });

});