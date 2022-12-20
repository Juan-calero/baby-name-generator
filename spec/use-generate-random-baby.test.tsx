import { renderHook } from "@testing-library/react-hooks";
import type { RenderHookResult } from "@testing-library/react-hooks";

import type { UseGenerateRandomBabyType } from "../src/hooks/use-generate-random-baby";
import { MOCK_BABY_LIST } from "./mocks/mock-baby-list";

const mockSetSelectedBaby = jest.fn();
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({ setSelectedBaby: mockSetSelectedBaby }),
}));

jest.mock("../src/api/api.json", () => MOCK_BABY_LIST);

describe("UseGenerateRandomBaby", () => {
  let triggerHook: () => RenderHookResult<
    never,
    ReturnType<UseGenerateRandomBabyType>
  >;

  beforeEach(async () => {
    const { useGenerateRandomBaby } = await import(
      "../src/hooks/use-generate-random-baby"
    );
    triggerHook = () => renderHook(() => useGenerateRandomBaby());
  });

  afterEach(jest.clearAllMocks);

  it("returns correct props", () => {
    const { result } = triggerHook();
    expect(result.current).toStrictEqual({
      generateRandomBaby: expect.any(Function),
    });
  });

  describe("generateRandomBaby", () => {
    it.each`
      gender      | expectedResult
      ${"FEMALE"} | ${{ babiesWithSameName: 172, birthYear: 2013, ethnicity: "ASIAN AND PACIFIC ISLANDER", gender: "FEMALE", name: "Olivia" }}
      ${"MALE"}   | ${{ babiesWithSameName: 387, birthYear: 2016, ethnicity: "HISPANIC", gender: "MALE", name: "Liam" }}
    `(
      "returns correct result when gender is $gender",
      ({ gender, expectedResult }) => {
        const { result } = triggerHook();
        result.current.generateRandomBaby(gender);

        expect(mockSetSelectedBaby).toBeCalledTimes(1);
        expect(mockSetSelectedBaby).toBeCalledWith(expectedResult);
      }
    );
  });
});
