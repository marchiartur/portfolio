import React from "react";
import { IProjectCardProps } from "./index.types";
import Text from "~/app/components/text";
import variables from "~/app/variables.module.scss";
import Image from "next/image";
import Button from "~/app/components/button";
import RightArrow from "~/app/icons/rightArrow";
import styles from "./index.module.scss";
import Link from "next/link";

const ProjectCard = (props: IProjectCardProps) => {
	const { title, description, slug, params } = props;

	return (
		<div className={styles.container}>
			<div className={styles.containerDescription}>
				<Text
					color={variables.onyx}
					text={title}
					fontWeight={800}
					fontSize='32px'
				/>

				<Text
					color={variables.darkGray}
					text={description}
					fontSize='16px'
					fontWeight={400}
				/>

				<Link href={"/projects/" + slug}>
					<Button
						type='text'
						text='Ver detalhes'
						rightIcon={<RightArrow />}
						style={{
							paddingLeft: 0,
						}}
					/>
				</Link>
			</div>

			<div>
				<Image
					className={styles.image}
					src={props.image}
					alt={"Project " + title}
					style={{
						objectFit: "fill",
						height: "auto",
						maxWidth: "425px",
					}}
					sizes='(max-width: 425px) 0px'
					// layout='responsive'
				/>
			</div>
		</div>
	);
};

export default ProjectCard;
