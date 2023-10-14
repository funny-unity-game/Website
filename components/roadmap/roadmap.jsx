const data = require("./data.json");

export default function Roadmap() {
	return (
		<>
			{data.map((item, index) => (
				<div
					key={index}
					className="flex min-h-[8rem] gap-6"
				>
					{!(index % 2) ? (
						<div className="flex flex-col items-end justify-center w-32 xs:w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[28rem] text-right">
							<p className="text-xs text-[#bbb] font-light">{item.date}</p>
							<p>{item.version}</p>
							<p
								className="text-sm text-[#ddd] font-light"
								dangerouslySetInnerHTML={{ __html: item.description }}
							></p>
						</div>
					) : (
						<div className="flex flex-col items-start justify-center w-32 xs:w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[28rem]"></div>
					)}
					<div className="flex flex-col items-center justify-center gap-1">
						<div className={(index == 0 ? "fade-top " : "") + "w-0 h-[calc(50%-4px)] border-l-2 border-[#fff8] border-dashed"}></div>
						{item.type == 0 ? (
							<div className="select-none my-[-0.25rem] font-medium text-[#fffa]">?</div>
						) : (
							<div className={(item.type == 1 ? "border-[#fff8] " : "border-[#fff0] bg-[#fff8] ") + "w-3 h-3 border-2 rounded-full"}></div>
						)}
						<div className="w-0 h-[calc(50%-4px)] border-l-2 border-[#fff8] border-dashed"></div>
					</div>
					{!(index % 2) ? (
						<div className="flex flex-col items-start justify-center w-32 xs:w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[28rem]"></div>
					) : (
						<div className="flex flex-col items-start justify-center w-32 xs:w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[28rem] text-left">
							<p className="text-xs text-[#bbb] font-light">{item.date}</p>
							<p>{item.version}</p>
							<p
								className="text-sm text-[#ddd] font-light"
								dangerouslySetInnerHTML={{ __html: item.description }}
							></p>
						</div>
					)}
				</div>
			))}
		</>
	);
}
