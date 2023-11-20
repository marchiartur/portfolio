import styles from "./page.module.scss";
import About from "./homepage/about";
import Contact from "./homepage/contact";
import Projects from "./homepage/projects";
import { IParamsProps } from "./params.types";
import Footer from "./components/footer";

export default function Home({ params }: { params: IParamsProps }) {
	return (
		<div>
			<div className={styles.contents}>
				<About />

				<Projects params={params} />

				<Contact />

				<Footer />
			</div>
		</div>
	);
}
