import React from "react";

import type { SelectedBabyType } from "../types";

import { SelectedBabyContext } from "./selected-baby-context";

export type SelectedBabyContextWrapperType = {
  children?: React.ReactNode;
};

export const SelectedBabyContextWrapper: React.FC<
  SelectedBabyContextWrapperType
> = ({ children }) => {
  const [selectedBaby, setSelectedBaby] =
    React.useState<SelectedBabyType>(null);

  return (
    <SelectedBabyContext.Provider value={{ selectedBaby, setSelectedBaby }}>
      {children}
    </SelectedBabyContext.Provider>
  );
};
