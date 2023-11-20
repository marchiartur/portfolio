import React from "react";
import styles from "./index.module.scss";
import SectionTitle from "~/app/[lang]/components/sectionTitle";
import { IParamsProps } from "~/app/[lang]/params.types";
import ProjectCard from "../card";
import { PROJECTS_DATA } from "../../projects/[slug]/data";

const Projects = ({ params }: { params: IParamsProps }) => {
	const data = Object.values(PROJECTS_DATA);

	return (
		<div
			id='projects'
			className={styles.container}
		>
			<SectionTitle>Projetos</SectionTitle>

			{data.map((element, index) => {
				const key = `ProjectCard__${index}`;

				return (
					<ProjectCard
						key={key}
						title={element.title}
						description={element.description}
						image={element.image}
						slug={element.slug}
						challenges={element.challenges}
						params={params}
					/>
				);
			})}
		</div>
	);
};

export default Projects;
