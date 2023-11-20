import Image from "next/image";
import React from "react";
import CheckIcon from "~/app/assets/check-icon.png";
import styles from "./cardResult.module.scss";
import { ICardResultProps } from "./cardResult.types";
import Text from "../../components/text";

const CardResult = (props: ICardResultProps) => {
	return (
		<div className={styles.container}>
			{props.text.map((e, index) => {
				return (
					<div
						key={`CardResult__${index}`}
						className={styles.result}
					>
						<Image
							alt=''
							src={CheckIcon}
							width={15}
							height={15}
						/>

						<Text className={styles.text}>{e}</Text>
					</div>
				);
			})}
		</div>
	);
};

export default CardResult;
