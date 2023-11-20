import Image from "next/image";
import React from "react";
import styles from "./cardTechnoloy.module.scss";
import { ICardTechnologyProps } from "./cardTechnology.types";
import Text from "../../components/text";
import variables from "~/app/variables.module.scss";

const CardTechnology = (props: ICardTechnologyProps) => {
	return (
		<div className={styles.container}>
			<Image
				src={props.image}
				alt={"Technology Icon" + props.text}
				width={80}
				className={styles.image}
			/>

			<div className={styles.footer}>
				<Text
					color={variables.onyx}
					fontSize='20px'
					fontWeight={600}
				>
					{props.text}
				</Text>

				<div className={styles.tag}>
					<Text fontSize='14px'>{props.tag}</Text>
				</div>
			</div>
		</div>
	);
};

export default CardTechnology;
