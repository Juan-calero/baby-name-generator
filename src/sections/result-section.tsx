import React from "react";
import styled from "styled-components";
import {
  colorDarkBege,
  colorDarkBrown,
  space5XL,
  space6XL,
} from "../base-components";

import { SelectedBabyContext } from "../contexts/selected-baby-context";

export const ResultSection: React.FC = () => {
  const { babyResult } = React.useContext(SelectedBabyContext);

  return (
    <StyledCard>
      <div>{babyResult?.name}</div>
    </StyledCard>
  );
};

const StyledCard = styled.section`
  width: ${space6XL};
  height: ${space6XL};
  background-color: ${colorDarkBege};
  color: ${colorDarkBrown};
`;
