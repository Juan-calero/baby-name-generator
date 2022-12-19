import React from "react";
import { Styled } from "./button.styles";

export type ButtonType = {
  children?: React.ReactNode;
  onClick: () => void;
};

export const Button: React.FC<ButtonType> = ({ onClick, children }) => (
  <Styled.Button {...{ onClick }}>{children}</Styled.Button>
);
