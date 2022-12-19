import styled, { css } from "styled-components";

import {
  colorDarkBrown,
  colorTextBege,
  space6XL,
  spaceS,
  spaceL,
} from "./tokens";

// Base Styles
const baseButton = css`
  min-width: ${space6XL};
  margin: ${spaceS};
  padding: ${spaceS} ${spaceL};
  background: ${colorDarkBrown};
  color: ${colorTextBege};
  font-size: ${spaceL};
`;

// Components
const Button = styled.button`
  ${baseButton}
`;

export const Styled = {
  Button,
};
