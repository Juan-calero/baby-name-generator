import React from "react";

import { SelectedBabyContext } from "../contexts/selected-baby-context";

import { Styled } from "./result-section.styles";

export const ResultSection: React.FC = () => {
  const { selectedBaby } = React.useContext(SelectedBabyContext);

  return (
    <Styled.Card>
      <p data-testid="selected-baby-name">{selectedBaby?.name || "Welcome"}</p>
    </Styled.Card>
  );
};
