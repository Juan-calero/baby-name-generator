import React from "react";

import { Button } from "../base-components";
import { useGenerateRandomBaby } from "../hooks";

import { Styled } from "./menu-section.styles";

export const MenuSection: React.FC = () => {
  const { generateRandomBaby } = useGenerateRandomBaby();

  return (
    <Styled.Menu>
      <Button onClick={() => generateRandomBaby("MALE")}>Male</Button>
      <Button onClick={() => generateRandomBaby("FEMALE")}>Female</Button>
    </Styled.Menu>
  );
};
