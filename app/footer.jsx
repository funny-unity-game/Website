import Link from "next/link";

export default function Footer() {
	return (
		<div className="px-12 sm:px-24 py-12 bg-[#111] text-[#888] border-t-[1px] border-t-[#444] flex justify-center">
			<div className="flex flex-col gap-12 max-w-5xl w-full">
				<div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 lg:gap-[7rem] flex-wrap">
					<div className="flex gap-4 items-center -translate-y-2">
						<img
							src="/icon.png"
							width={48}
						/>
						<p className="text-white font-normal text-2xl select-none">Mission: Monkey</p>
					</div>
					<div className="flex flex-row flex-wrap items-start gap-6 md:gap-[3.5rem] lg:gap-[6rem]">
						<div className="text-sm leading-8">
							<p className="text-white">Source code</p>
							<p>
								<a href="https://github.com/funny-unity-game/Mission-Monkey">Game</a>
							</p>
							<p>
								<a href="https://github.com/funny-unity-game/Website">Website</a>
							</p>
						</div>
						<div className="text-sm leading-8">
							<p className="text-white">Explore</p>
							<p>
								<Link href={"/"}>Home</Link>
							</p>
							<p>
								<Link href={"/gallery"}>Image gallery</Link>
							</p>
							<p>
								<Link href={"/downloads"}>Downloads</Link>
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col xs:flex-row justify-between items-center xs:items-end gap-3">
					<div className="flex flex-col gap-4">
						<p>©️ 2023 Lemon Studios</p>
					</div>
					<div className="flex flex-col gap-4">
						<a
							href="https://github.com/funny-unity-game"
							className="text-2xl"
						>
							<i class="bi bi-github"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
