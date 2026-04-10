import { vi } from "vitest";

vi.mock("../trusted_by/usePrefersReducedMotion", () => ({
  __esModule: true,
  default: () => false,
}));

vi.mock("embla-carousel-react", () => ({
  __esModule: true,
  default: () => [() => {}, { scrollTo: vi.fn() }],
}));

vi.mock("embla-carousel-auto-scroll", () => ({
  __esModule: true,
  default: () => ({}),
}));

import { render, screen, cleanup } from "@testing-library/react";
import TrustedBy from "../../common/TrustedBy";
import clients from "../trusted_by/ClientsData";

describe("TrustedBy", () => {
  beforeEach(() => {
    render(<TrustedBy />);
  });

  afterEach(cleanup);

  it("renders the paragraph", () => {
    expect(screen.getByText(/Over 50 businesses trust us/)).toBeInTheDocument();
  });

  it("renders all client logos with correct accessible alt text", () => {
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(clients.length);

    clients.forEach((client) => {
      const logo = screen.getByRole("img", { name: client.alt });
      expect(logo).toBeInTheDocument();
    });
  });
});
