import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<Link
					href='https://www.linkedin.com/in/marchiartur'
					target='_blank'
				>
					2023 - @marchiartur
				</Link>
			</div>
		</div>
	);
};

export default Footer;
