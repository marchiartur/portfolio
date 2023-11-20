import { IProjectInformation } from "./../../projects/[slug]/data";
import { IParamsProps } from "~/app/[lang]/params.types";

export interface IProjectCardProps
	extends Omit<IProjectInformation, "results" | "technologies"> {
	params: IParamsProps;
}
