"use client";
import { NavBar } from "./navbar.jsx";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<NavBar />
			<main className="flex min-h-screen w-full flex-col px-24">
				<div className="bg-[url('/grid.svg')] bg-repeat bg-grid h-[42rem] w-full absolute top-16 left-0 -z-50"></div>
				<div className=" py-48 flex flex-col items-center">
					<div className="flex flex-row gap-4 justify-center select-none">
						<p className="text-[3rem] sm:text-[4rem] lg:text-[6rem] font-bold">Mission: </p>
						<p className="text-[3rem] sm:text-[4rem] lg:text-[6rem] font-bold bg-gradient-to-tr from-[#ff4d4d] to-[#f9cb28] bg-clip-text text-[#0000]">Monkey</p>
					</div>
					<p className="text-xl text-center">A game for a school project created by at least 2 grade 10 students</p>
					<div className="flex flex-row gap-8 mt-16">
						<button
							className="flex gap-2 px-5 py-3 shadow-lg bg-[#050505] hover:bg-[#151515] transition-all rounded-lg text-lg relative
						after:bg-[#222] after:content-[''] after:w-[calc(100%+2px)] after:h-[calc(100%+2px)] after:absolute after:top-[-1px] after:left-[-1px] after:-z-10 after:rounded-lg"
							onClick={() => {
								document.querySelector("button a.github-link").click();
							}}
						>
							<i class="bi bi-github"></i>
							<p>
								<span className="hidden sm:inline-block mr-1">View on </span>Github
							</p>
							<Link
								href={"https://github.com/funny-unity-game/Mission-Monkey"}
								legacyBehavior={true}
							>
								<a
									target="_blank"
									className="github-link"
								></a>
							</Link>
						</button>
						<button
							className="flex gap-2 px-5 py-3 shadow-lg bg-gradient-to-tr from-[#050505] to-[#050505] hover:from-[#ff4d4d] hover:to-[#f9cb28] transition-all rounded-lg text-lg relative 
						after:bg-[#222] after:content-[''] after:w-[calc(100%+2px)] after:h-[calc(100%+2px)] after:absolute after:top-[-1px] after:left-[-1px] after:-z-10 after:rounded-lg after:bg-gradient-to-tr after:from-[#ff4d4d] after:to-[#f9cb28]
						before:content-[''] before:w-[calc(100%+2px)] before:h-[calc(100%+2px)] before:absolute before:top-[-1px] before:left-[-1px] before:-z-10 before:rounded-lg before:bg-gradient-to-tr before:from-[#ff4d4d] before:to-[#f9cb28] before:blur-xl before:opacity-40"
							onClick={() => {
								document.querySelector("button a.download-link").click();
							}}
						>
							<i class="bi bi-download"></i>
							<p>Download</p>
							<Link
								href={"https://github.com/funny-unity-game/Mission-Monkey/releases/latest"}
								legacyBehavior={true}
							>
								<a
									target="_blank"
									className="download-link"
								></a>
							</Link>
						</button>
					</div>
				</div>
			</main>
		</>
	);
}
