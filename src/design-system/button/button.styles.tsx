import styled, { css } from 'styled-components';

import {
	colorDarkBrown,
	colorTextBege,
	colorLightBege,
	space6XL,
	spaceL,
	spaceS,
} from '../tokens';

// Base Styles
const baseButton = css`
	min-width: ${space6XL};
	margin: ${spaceS};
	padding: ${spaceS} ${spaceL};
	background: ${colorDarkBrown};
	color: ${colorTextBege};
	font-size: ${spaceL};
	cursor: pointer;
`;

// Components
const Button = styled.button<{ disabled: boolean }>`
	${baseButton}
	${({ disabled }) =>
		disabled &&
		css`
			cursor: default;
			background: ${colorTextBege};
			border-color: ${colorLightBege};
			color: ${colorDarkBrown};
		`}
`;

export const Styled = {
	Button,
};
