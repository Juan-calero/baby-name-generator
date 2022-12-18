import React from "react";
import styled from "styled-components";
import { SelectedBabyContextWrapper } from "./contexts/selected-baby-context-wrapper";
import { MenuSection } from "./sections/menu-section";
import { ResultSection } from "./sections/result-section";
import { colorLightBege } from "./base-components/tokens";

export const App = () => (
  <StyledPage>
    <SelectedBabyContextWrapper>
      <ResultSection />
      <MenuSection />
    </SelectedBabyContextWrapper>
  </StyledPage>
);

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colorLightBege};
  min-height: 100vh;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
