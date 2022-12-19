import React from "react";

import { SelectedBabyContext } from "../contexts/selected-baby-context";

import { Styled } from "./result-section.styles";

export const ResultSection: React.FC = () => {
  const { babyResult } = React.useContext(SelectedBabyContext);

  return (
    <Styled.Card>
      <p>{babyResult?.name}</p>
    </Styled.Card>
  );
};
