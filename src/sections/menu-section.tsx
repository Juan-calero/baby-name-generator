import React from "react";
import styled from "styled-components";

import { Button } from "../base-components";
import { useGenerateRandomBaby } from "../hooks";

export const MenuSection: React.FC = () => {
  const { generateRandomBaby } = useGenerateRandomBaby();

  return (
    <ButtonMenu>
      <Button onClick={() => generateRandomBaby("MALE")}>Male</Button>
      <Button onClick={() => generateRandomBaby("FEMALE")}>Female</Button>
    </ButtonMenu>
  );
};

const ButtonMenu = styled.section`
  display: flex;
`;
