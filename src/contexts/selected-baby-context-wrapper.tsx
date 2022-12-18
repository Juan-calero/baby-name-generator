import React from "react";

import type { SelectedBabyType } from "../types";

import { SelectedBabyContext } from "./selected-baby-context";

export type SelectedBabyContextWrapperType = {
  children?: React.ReactNode;
};

export const SelectedBabyContextWrapper: React.FC<
  SelectedBabyContextWrapperType
> = ({ children }) => {
  const [babyResult, setBabyResult] = React.useState<SelectedBabyType>(null);

  return (
    <SelectedBabyContext.Provider value={{ babyResult, setBabyResult }}>
      {children}
    </SelectedBabyContext.Provider>
  );
};
