import React from "react";
import { render, RenderResult } from "@testing-library/react";

const mockSelectedBabyContextWrapper = jest.fn(({ children }) => children);
jest.mock("../src/contexts/selected-baby-context-wrapper", () => ({
  SelectedBabyContextWrapper: mockSelectedBabyContextWrapper,
}));

const mockPage = jest.fn(({ children }) => children);
jest.mock("../src/app.styles", () => ({
  Styled: {
    Page: mockPage,
  },
}));

const mockMenuSection = jest.fn(() => <span>MenuSection</span>);
const mockResultSection = jest.fn(() => <span>ResultSection</span>);
jest.mock("../src/sections", () => ({
  MenuSection: mockMenuSection,
  ResultSection: mockResultSection,
}));

describe("App", () => {
  let renderComponent: () => RenderResult;

  beforeEach(async () => {
    const { App } = await import("../src/app");
    renderComponent = () => render(<App />);
  });

  afterEach(jest.clearAllMocks);

  describe.each`
    component                       | mockComponent                     | expectedProps
    ${"SelectedBabyContextWrapper"} | ${mockSelectedBabyContextWrapper} | ${{ children: expect.anything() }}
    ${"Styled.Page"}                | ${mockPage}                       | ${{ children: [expect.anything(), expect.anything()] }}
    ${"ResultSection"}              | ${mockResultSection}              | ${{}}
    ${"MenuSection"}                | ${mockMenuSection}                | ${{}}
  `("$component", ({ mockComponent, expectedProps }) => {
    it("renders with correct params", () => {
      renderComponent();
      expect(mockComponent).toBeCalledTimes(1);
      expect(mockComponent).toBeCalledWith(expectedProps, {});
    });
  });
});
