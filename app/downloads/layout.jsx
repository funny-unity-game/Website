import "../globals.css";

import NavBar from "../navbar.jsx";
import Footer from "../footer.jsx";

export const metadata = {
	title: "Download Mission: Monkey",
	description: "Download the funny game made by at least 2 grade 10 students for a school project"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<base target="_blank"></base>
			</head>
			<body>{children}</body>
		</html>
	);
}
