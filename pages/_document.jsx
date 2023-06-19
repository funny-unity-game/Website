import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<title>404 - Page not found</title>
				<link
					rel="icon"
					type="image/x-icon"
					href="/favicon.ico"
				></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
