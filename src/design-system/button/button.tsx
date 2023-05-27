import React from 'react';
import { Styled } from './button.styles';

export type ButtonType = {
	children?: React.ReactNode;
	onClick: () => void;
	disabled?: boolean;
	[prop: string]: unknown;
};

export const Button: React.FC<ButtonType> = ({
	onClick,
	children,
	disabled = false,
	...props
}) => (
	<Styled.Button {...{ onClick, disabled, ...props }}>{children}</Styled.Button>
);
