import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import classNames from "classnames";
import styles from "./layout.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Artur's Portfolio",
	description: "Web developer portfolio",
};

export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { lang: string };
}) {
	return (
		<html lang='pt-BR'>
			<body className={classNames(inter.className, styles.container)}>
				<Navbar params={params} />

				{children}
			</body>
		</html>
	);
}
