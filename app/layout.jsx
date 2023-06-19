import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Mission: Monkey",
	description: "A game for a school project created by at least 2 grade 10 students"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<base target="_blank"></base>
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
