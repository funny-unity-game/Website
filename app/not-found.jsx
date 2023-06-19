import Link from "next/link";

export default function Custom404() {
	return (
		<main className="bg-black h-screen w-screen flex flex-col justify-center items-center select-none">
			<p className="text-7xl mb-4">🙈</p>
			<p className="text-7xl">404</p>
			<p className="text-xl">We couldn't find the page you were looking for</p>

			<Link
				href={"/"}
				className="flex justify-center items-center gap-2 px-5 py-3 mt-4 shadow-lg bg-[#050505] hover:bg-[#151515] border-[#222] border-[1px] transition-all rounded-lg text-base sm:text-lg"
			>
				<i className="bi bi-house"></i>
				<span>Go back to home</span>
			</Link>
		</main>
	);
}
