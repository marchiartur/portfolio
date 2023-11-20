import React from "react";
import Text from "../text";
import { ITextProps } from "../text/index.types";

const SectionTitle = (props: ITextProps) => {
	return (
		<Text
			fontWeight={700}
			fontSize='48px'
			{...props}
		/>
	);
};

export default SectionTitle;
