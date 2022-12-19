import styled, { css } from "styled-components";
import { colorDarkBege, colorDarkBrown, space6XL } from "../base-components";

// Base Styles
const baseCard = css`
  width: calc(${space6XL} * 3);
  height: calc(${space6XL} * 3);
  background-color: ${colorDarkBege};
  color: ${colorDarkBrown};
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Components
const Card = styled.section`
  ${baseCard}
`;

export const Styled = {
  Card,
};
