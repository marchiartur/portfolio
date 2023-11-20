import React from "react";
import styles from "./menu.module.scss";
import Text from "../text";
import IconGithub from "~/app/icons/github";
import IconLinkedin from "~/app/icons/linkedin";
import variables from "~/app/variables.module.scss";
import Link from "next/link";
import { IParamsProps } from "../../params.types";

const NavbarContainer = ({ params }: { params: IParamsProps }) => {
	return (
		<>
			<div className={styles.container}>
				<Link href='/pt-BR/#about'>
					<Text
						text='Sobre'
						fontWeight={500}
						color={variables.onyx}
					/>
				</Link>

				<Link href='/pt-BR/#projects'>
					<Text
						text='Projetos'
						color={variables.onyx}
						fontWeight={500}
					/>
				</Link>

				<Link href='/pt-BR/#contact'>
					<Text
						text='Contato'
						fontWeight={500}
						color={variables.onyx}
					/>
				</Link>
			</div>

			<div className={styles.containerIcons}>
				<Link
					href='https://www.linkedin.com/in/marchiartur/'
					target='_blank'
				>
					<IconLinkedin />
				</Link>

				<Link
					href='https://github.com/marchiartur'
					target='_blank'
				>
					<IconGithub />
				</Link>

				{/* <Link
					href=''
					onClick={toggleLanguage}
					locale={false}
				>
					{currentLanguage === Languages.enUS ? "Português" : "English"}
				</Link> */}
			</div>
		</>
	);
};

export default NavbarContainer;
