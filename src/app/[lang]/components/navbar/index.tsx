import React from "react";
import Menu from "./menu";
import styles from "./index.module.scss";
import { IParamsProps } from "../../params.types";

const Navbar = ({ params }: { params: IParamsProps }) => {
	return (
		<div className={styles.container}>
			<Menu params={params} />
		</div>
	);
};

export default Navbar;
