import React from "react";
import { render } from "@testing-library/react";
import type { RenderResult } from "@testing-library/react";

const mockButton = jest.fn(({ onClick }) => (
  <span {...{ onClick }}>Button</span>
));
jest.mock("../src/base-components", () => ({
  Button: mockButton,
}));

const mockGenerateRandomBaby = jest.fn();
const mockUseGenerateRandomBaby = jest.fn(() => ({
  generateRandomBaby: mockGenerateRandomBaby,
}));
jest.mock("../src/hooks/use-generate-random-baby", () => ({
  useGenerateRandomBaby: mockUseGenerateRandomBaby,
}));

const mockMenu = jest.fn(({ children }) => children);
jest.mock("../src/sections/menu-section.styles", () => ({
  Styled: { Menu: mockMenu },
}));

describe("MenuSection", () => {
  let renderComponent: () => RenderResult;

  beforeEach(async () => {
    const { MenuSection } = await import("../src/sections/menu-section");
    renderComponent = () => render(<MenuSection />);
  });

  afterEach(jest.clearAllMocks);

  describe.each`
    component                  | mockComponent                | expectedProps
    ${"useGenerateRandomBaby"} | ${mockUseGenerateRandomBaby} | ${[]}
    ${"Styled.Menu"}           | ${mockMenu}                  | ${[{ children: [expect.anything(), expect.anything()] }, {}]}
  `("$component", ({ mockComponent, expectedProps }) => {
    it("renders with correct params", () => {
      renderComponent();
      expect(mockComponent).toBeCalledTimes(1);
      expect(mockComponent).toBeCalledWith(...expectedProps);
    });
  });

  describe.each`
    callNo | expectedChildren                                          | expectedOnClickProps
    ${1}   | ${{ children: "Male", "data-testid": "button-male" }}     | ${"MALE"}
    ${2}   | ${{ children: "Female", "data-testid": "button-female" }} | ${"FEMALE"}
  `(
    "Button no. $callNo",
    ({ callNo, expectedChildren, expectedOnClickProps }) => {
      it("renders with correct params", () => {
        renderComponent();
        expect(mockButton).toBeCalledTimes(2);
        expect(mockButton).toHaveBeenNthCalledWith(
          callNo,
          { ...expectedChildren, onClick: expect.any(Function) },
          {}
        );
      });

      it("generateRandomBaby callback is called with correct params", () => {
        renderComponent();
        mockButton.mock.calls[callNo - 1][0].onClick();

        expect(mockGenerateRandomBaby).toBeCalledTimes(1);
        expect(mockGenerateRandomBaby).toBeCalledWith(expectedOnClickProps);
      });
    }
  );
});
