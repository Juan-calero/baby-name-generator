import React from "react";
import { fireEvent, render, RenderResult } from "@testing-library/react";
import { MOCK_BABY_LIST } from "./mocks/mock-baby-list";

jest.mock("../src/api/api.json", () => MOCK_BABY_LIST);

describe("Baby Name Generator", () => {
  let renderComponent: () => RenderResult;

  beforeEach(async () => {
    const { App } = await import("../src/app");
    renderComponent = () => render(<App />);
  });

  afterEach(jest.clearAllMocks);

  it("Welcome screen is displayed at render", () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId("selected-baby-name")).toBeInTheDocument();
    expect(getByTestId("selected-baby-name")).toHaveTextContent("Welcome");
  });

  describe.each`
    component                         | testId             | expectedBabyName
    ${"Male Name Generator Button"}   | ${"button-male"}   | ${"Liam"}
    ${"Female Name Generator Button"} | ${"button-female"} | ${"Olivia"}
  `("$component", ({ testId, expectedBabyName }) => {
    it("is present in the DOM", () => {
      const { queryByTestId } = renderComponent();
      expect(queryByTestId(testId)).toBeInTheDocument();
    });

    it("generates a gender-specific random name onClick", () => {
      const { getByTestId } = renderComponent();

      const button = getByTestId(testId);
      fireEvent.click(button);

      expect(getByTestId("selected-baby-name")).toBeInTheDocument();
      expect(getByTestId("selected-baby-name")).toHaveTextContent(
        expectedBabyName
      );
    });
  });
});
