import React from "react";
import styles from "./index.module.scss";
import Text from "~/app/components/text";
import Button from "~/app/components/button";
import ForwardMessageIcon from "~/app/icons/forwardMessage";
import SectionTitle from "~/app/components/sectionTitle";
import Link from "next/link";

const Contact = () => {
	return (
		<div
			id='contact'
			className={styles.container}
		>
			<div>
				<SectionTitle>Vamos trabalhar juntos</SectionTitle>

				<Text>
					Quer discutir uma oportunidade para criar algo grandioso? Estou pronto
					quando você estiver.
				</Text>
			</div>

			<div>
				<Link href='mailto:marchiartur@gmail.com'>
					<Button
						leftIcon={<ForwardMessageIcon />}
						text='Entrar em contato'
					/>
				</Link>
			</div>
		</div>
	);
};

export default Contact;
