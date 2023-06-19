import Link from "next/link";
import "../app/globals.css";
import NavBar from "../app/navbar.jsx";
import Footer from "../app/footer.jsx";

export default function Custom404() {
	return (
		<>
			<NavBar />
            <main className="bg-black h-screen w-screen px-12 flex flex-col justify-center items-center select-none">
			<title>404 - Page not found - Mission: Monkey</title>
			<p className="text-7xl mb-4 text-center">🙈</p>
			<p className="text-7xl text-center">404</p>
			<p className="text-xl text-center">We couldn't find the page you were looking for</p>

			<Link
				href={"/"}
				className="flex justify-center items-center gap-2 px-5 py-3 mt-4 shadow-lg bg-[#050505] hover:bg-[#151515] border-[#222] border-[1px] transition-all rounded-lg text-base sm:text-lg"
			>
				<i className="bi bi-house"></i>
				<span>Go back to home</span>
			</Link>
			</main>
			<Footer />
		</>
	);
}