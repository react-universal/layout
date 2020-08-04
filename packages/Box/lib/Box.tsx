import React from "react";
import { View, ViewProps } from "react-native";
import styled from "styled-components/native";
import {
	ColorProps,
	FlexboxProps,
	LayoutProps,
	SpaceProps,
	border,
	color,
	flexbox,
	layout,
	space,
	compose
} from "styled-system";

export type BoxProps = ViewProps &
	ColorProps &
	SpaceProps &
	LayoutProps &
	FlexboxProps & {
		children?: JSX.Element;
	};

const styleProps = compose(
	color,
	space,
	layout,
	flexbox,
	border
);

const Box = styled(View)<BoxProps>(styleProps);

export default Box;
