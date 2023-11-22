"use client";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox } from "lightbox.js-react";

export default function Gallery() {
	return (
		<main className="flex min-h-screen w-full flex-col gap-4 px-12 md:px-24 pt-16 items-center">
			<p className="text-4xl">Gallery</p>
			<div className="p-8">
				<SlideshowLightbox
					className="columns-sm [column-count:4] gap-4 space-y-4"
					showControls={false}
					iconColor={"#fffa"}
					backgroundColor={"#000b"}
					showThumbnails={true}
				>
					<img
						className="rounded-xl"
						src="/screenshots/1.png"
					/>
					<img
						className="rounded-xl"
						src="/screenshots/2.png"
					/>
					<img
						className="rounded-xl"
						src="/screenshots/3.png"
					/>
					<img
						className="rounded-xl"
						src="/screenshots/4.png"
					/>
					<img
						className="rounded-xl"
						src="/screenshots/5.png"
					/>
					<img
						className="rounded-xl"
						src="/screenshots/6.png"
					/>
					<img
						className="rounded-xl"
						src="/screenshots/7.png"
					/>
					<img
						className="rounded-xl"
						src="/screenshots/8.png"
					/>
					<img
						className="rounded-xl"
						src="/screenshots/9.png"
					/>
					<img
						className="rounded-xl"
						src="/screenshots/10.png"
					/>
				</SlideshowLightbox>
				<p className="text-center text-[#fff8] mt-16 select-none">That's all...</p>
			</div>
		</main>
	);
}
