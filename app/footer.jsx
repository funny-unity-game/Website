export function Footer() {
	return (
		<div className="px-48 py-12 bg-[#111] text-[#888] flex justify-between border-t-[1px] border-t-[#444]">
			<div className="flex flex-col gap-4">
				<div className="flex gap-4 items-center">
					<img
						src="/icon.png"
						width={48}
					/>
					<p className="text-white font-normal text-2xl select-none">Mission: Monkey</p>
				</div>
				<p>©️ 2023 Lemon Studios</p>
			</div>
			<div></div>
		</div>
	);
}
