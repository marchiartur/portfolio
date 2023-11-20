"use client";
import React from "react";
import { IParamsProps, ISlugProps } from "../../params.types";
import { PROJECTS_DATA } from "./data";
import SectionTitle from "../../components/sectionTitle";
import Text from "../../components/text";
import Image from "next/image";
import styles from "./page.module.scss";
import CardTechnology from "./cardTechnology";
import variables from "~/app/variables.module.scss";
import RightArrow from "~/app/icons/rightArrow";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CardResult from "./cardResult";

const DetailedProject = (props: { params: IParamsProps & ISlugProps }) => {
	const { params } = props;
	const data = PROJECTS_DATA[params.slug];

	const router = useRouter();

	return (
		<div className={styles.container}>
			<Link
				href=''
				onClick={() => {
					router.back();
				}}
			>
				<div className={styles.arrow}>
					<RightArrow />
				</div>
			</Link>

			<SectionTitle>{data.title}</SectionTitle>

			<Image
				src={data.image}
				alt=''
				className={styles.image}
			/>

			<Text>{data.description}</Text>

			<div className={styles.technologies}>
				<Text
					fontWeight={700}
					color={variables.lightGray}
					fontSize='30px'
				>
					Tecnologias
				</Text>

				<div className={styles.technologiesCards}>
					{data.technologies.map((e) => {
						return <CardTechnology {...e} />;
					})}
				</div>
			</div>

			<div className={styles.technologies}>
				<Text
					fontWeight={700}
					color={variables.lightGray}
					fontSize='30px'
				>
					Desafios enfrentados
				</Text>

				<div>
					{data.challenges.map((p) => {
						return <Text marginBottom='10px'>{p}</Text>;
					})}
				</div>
			</div>

			<div className={styles.technologies}>
				<Text
					fontWeight={700}
					color={variables.lightGray}
					fontSize='30px'
				>
					Resultados alcançados
				</Text>

				<div>
					<CardResult text={data.results} />
				</div>
			</div>
		</div>
	);
};

export default DetailedProject;
