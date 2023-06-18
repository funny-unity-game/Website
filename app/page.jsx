import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen w-full flex-col px-24">
			<div className=" py-48 flex flex-col items-center">
				<div className="flex flex-row gap-4 justify-center select-none">
					<p className="text-[3rem] sm:text-[4rem] lg:text-[6rem] font-bold">Mission: </p>
					<p className="text-[3rem] sm:text-[4rem] lg:text-[6rem] font-bold bg-gradient-to-tr from-[#ff4d4d] to-[#f9cb28] bg-clip-text text-[#0000]">Monkey</p>
				</div>
				<p className="text-xl text-center">A game for a school project created by at least 2 grade 10 students</p>
				<div className="flex flex-row gap-8">
					<button>View on Github</button>
					<button>Download</button>
				</div>
			</div>
			<div className="bg-[url('/grid.svg')] bg-repeat bg-grid h-[32rem] w-full absolute top-0 left-0"></div>
		</main>
	);
}
