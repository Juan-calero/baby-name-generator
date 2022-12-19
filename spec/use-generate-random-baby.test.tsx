import { renderHook } from "@testing-library/react-hooks";
import type { RenderHookResult } from "@testing-library/react-hooks";

import type { UseGenerateRandomBabyType } from "../src/hooks/use-generate-random-baby";

const MOCK_BABY_LIST: any[] = [];
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

  it.each`
    callback                 | mockCallback                 | expectedResult
    ${"SelectedBabyContext"} | ${"mockSelectedBabyContext"} | ${{}}
  `("$callback", ({ mockCallback, expectedResult }) => {
    triggerHook();
    expect(mockCallback).toBeCalledTimes(1);
    expect(mockCallback).toBeCalledWith(expectedResult);
  });
});
