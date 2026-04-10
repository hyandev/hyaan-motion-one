import { render, screen } from "@testing-library/react";
import Canvas from "./Canvas";

describe("Canvas", () => {
  beforeEach(() => {
    render(
      <Canvas
        x={514.36}
        y={251.86}
        width={407.27}
        height={407.27}
        particles={200}
      />,
    );
  });
  it("should canvas exist", () => {
    const canvas = screen.getByTestId("canvas");
    expect(canvas).toBeInTheDocument();
  });
});
