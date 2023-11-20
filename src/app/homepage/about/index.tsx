"use client";
import React from "react";
import Text from "~/app/components/text";
import variables from "~/app/variables.module.scss";
import styles from "./index.module.scss";
import Button from "~/app/components/button";
import Link from "next/link";

const About = () => {
	return (
		<div
			id='about'
			className={styles.container}
		>
			<div className={styles.containerName}>
				<Text
					color={variables.darkGray}
					className={styles.namePreffix}
				>
					Eu sou
					<span
						style={{
							color: variables.black,
						}}
					>
						{" "}
						Artur Pacagnan
					</span>
				</Text>
			</div>

			<Text
				className={styles.description}
				text='Um poeta de pixels e compositor de códigos, orquestro a sinfonia visual de sites, dando vida aos pixels e transformando linhas de código em experiências interativas. Como virtuoso do front-end, crio interfaces de usuário fluidas, garantindo que cada clique seja uma jornada harmoniosa pelo quadro digital.'
				color={variables.darkGray}
			/>

			<div className={styles.buttons}>
				<Button
					text='Baixar currículo'
					href='https://drive.google.com/file/d/1Q-h8KezY6ZaxSYUOgVorwuqyXMzxNium/view?usp=sharing'
					download='Resume Artur'
					onClick={() => {
						window.open(
							"https://drive.google.com/file/d/1Q-h8KezY6ZaxSYUOgVorwuqyXMzxNium/view?usp=sharing",
							"_blank"
						);
					}}
				/>

				<Link href='/pt-BR/#contact'>
					<Button
						text='Entrar em contato'
						type='secondary'
					/>
				</Link>
			</div>
		</div>
	);
};

export default About;
