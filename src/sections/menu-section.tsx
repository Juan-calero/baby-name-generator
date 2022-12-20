import React from "react";

import { Button } from "../base-components";
import { useGenerateRandomBaby } from "../hooks";

import { Styled } from "./menu-section.styles";

export const MenuSection: React.FC = () => {
  const { generateRandomBaby } = useGenerateRandomBaby();

  return (
    <Styled.Menu>
      <Button
        onClick={() => generateRandomBaby("MALE")}
        data-testid="button-male"
      >
        Male
      </Button>
      <Button
        onClick={() => generateRandomBaby("FEMALE")}
        data-testid="button-female"
      >
        Female
      </Button>
    </Styled.Menu>
  );
};
