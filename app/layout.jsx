import "./globals.css";

import NavBar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

export const metadata = {
	title: "Mission: Monkey",
	description: "A game for a school project created by at least 2 grade 10 students"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<base target="_blank"></base>
				<meta property="og:image" content="https://missionmonkey.netlify.app/icon.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="128" />
				<meta property="og:image:height" content="128" />
			</head>
			<body>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
