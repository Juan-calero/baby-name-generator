import React from "react";
import styled from "styled-components";

import {
  colorDarkBrown,
  colorTextBege,
  space5XL,
  spaceS,
  spaceXXL,
} from "./tokens";

export type ButtonType = {
  children?: React.ReactNode;
  onClick: () => void;
};

export const Button: React.FC<ButtonType> = ({ onClick, children }) => (
  <StyledButton {...{ onClick }} data-qa="button">
    {children}
  </StyledButton>
);

const StyledButton = styled.button`
  height: ${spaceXXL};
  min-width: ${space5XL};
  margin: ${spaceS};
  background: ${colorDarkBrown};
  color: ${colorTextBege};
`;
