import { ReactNode } from "react";
import CSS from "csstype";

export interface ITextProps extends CSS.Properties {
	text?: any;
	className?: string;
	children?: ReactNode;
}
