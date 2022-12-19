import styled, { css } from "styled-components";
import { colorLightBege, spaceXXL } from "./base-components";

// Base Styles
const basePage = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colorLightBege};
  min-height: 100vh;
  justify-content: center;
  font-size: ${spaceXXL};
  color: white;
`;

// Components
const Page = styled.div`
  ${basePage}
`;

export const Styled = {
  Page,
};
