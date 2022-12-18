import * as React from "react";
import type { SelectedBabyType } from "../types";

export type SelectedBabyContextType = {
  babyResult: SelectedBabyType;
  setBabyResult: React.Dispatch<React.SetStateAction<SelectedBabyType>>;
};

export const SelectedBabyContext = React.createContext<SelectedBabyContextType>(
  { babyResult: null, setBabyResult: () => {} }
);
