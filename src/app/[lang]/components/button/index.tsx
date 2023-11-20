import React from "react";
import { IButtonProps } from "./index.types";
import styles from "./index.module.scss";
import classNames from "classnames";

const Button = (props: IButtonProps) => {
	const {
		type = "primary",
		leftIcon,
		style,
		text,
		rightIcon,
		...buttonProps
	} = props;

	return (
		<button
			className={classNames(styles.button, {
				[styles.primary]: type === "primary",
				[styles.secondary]: type === "secondary",
				[styles.text]: type === "text",
			})}
			style={style}
			{...buttonProps}
		>
			{leftIcon}
			{text}
			{rightIcon}
		</button>
	);
};

export default Button;
