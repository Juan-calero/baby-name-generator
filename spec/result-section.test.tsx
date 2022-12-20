import * as React from "react";
import { render } from "@testing-library/react";
import type { RenderResult } from "@testing-library/react";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({ selectedBaby: { name: "mockBabyName" } }),
}));

const mockCard = jest.fn(({ children }) => children);
jest.mock("../src/sections/result-section.styles", () => ({
  Styled: { Card: mockCard },
}));

describe("ResultSection", () => {
  let renderComponent: () => RenderResult;

  beforeEach(async () => {
    const { ResultSection } = await import("../src/sections/result-section");
    renderComponent = () => render(<ResultSection />);
  });

  afterEach(jest.clearAllMocks);

  describe.each`
    component | mockComponent | expectedProps
    ${"Card"} | ${mockCard}   | ${{ children: expect.anything() }}
  `("$component", ({ mockComponent, expectedProps }) => {
    it("renders with correct params", () => {
      const { getByText } = renderComponent();
      expect(mockComponent).toBeCalledTimes(1);
      expect(mockComponent).toBeCalledWith(expectedProps, {});
      expect(getByText("mockBabyName")).toBeDefined();
    });
  });
});
