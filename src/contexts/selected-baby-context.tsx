import * as React from "react";
import type { SelectedBabyType } from "../types";

export type SelectedBabyContextType = {
  selectedBaby: SelectedBabyType;
  setSelectedBaby: React.Dispatch<React.SetStateAction<SelectedBabyType>>;
};

export const SelectedBabyContext = React.createContext<SelectedBabyContextType>(
  { selectedBaby: null, setSelectedBaby: () => {} }
);
