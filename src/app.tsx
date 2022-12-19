import React from "react";
import { SelectedBabyContextWrapper } from "./contexts/selected-baby-context-wrapper";
import { ResultSection, MenuSection } from "./sections";
import { Styled } from "./app.styles";

export const App: React.FC = () => (
  <SelectedBabyContextWrapper>
    <Styled.Page>
      <ResultSection />
      <MenuSection />
    </Styled.Page>
  </SelectedBabyContextWrapper>
);
