import CSS from "csstype";
export type IButtonType = "primary" | "secondary" | "text";

export interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
	leftIcon?: any;
	text?: string;
	type?: IButtonType;
	rightIcon?: any;
	style?: CSS.Properties;
}
