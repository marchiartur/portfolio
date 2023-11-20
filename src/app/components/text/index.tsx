import React, { ReactNode } from "react";
import { ITextProps } from "./index.types";

const Text = ({
	text = "",
	children = null,
	className = "",
	...props
}: ITextProps) => {
	return (
		<p
			style={{
				...props,
			}}
			className={className}
		>
			{text || children}
		</p>
	);
};

export default Text;
